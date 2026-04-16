import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // 🔥 VERY IMPORTANT
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private firestore: Firestore) {}

  enquiry = {
    name: '',
    mobile: '',
    location: '',
    type: '',
    description: ''
  };

  showOtherField = false;
  isSubmitting = false;

  onTypeChange() {
    this.showOtherField = this.enquiry.type === 'Other';
  }

  isFormValid(): boolean {

    const nameValid = this.enquiry.name.trim().length >= 3;
    const mobileValid = /^[6-9]\d{9}$/.test(this.enquiry.mobile); // Indian number
    const typeValid = this.enquiry.type !== '';
  
    const descriptionValid =
      this.enquiry.type !== 'Other' ||
      this.enquiry.description.trim().length > 5;
  
    return nameValid && mobileValid && typeValid && descriptionValid;
  }

  // async submitEnquiry() {


  //   if (!this.isFormValid()) return;
  
  //   this.isSubmitting = true;
  
  //   try {
  
  //     // 🔥 FIREBASE SAVE
  //     const ref = collection(this.firestore, 'enquiries');
  
  //     await addDoc(ref, {
  //       ...this.enquiry,
  //       createdAt: new Date()
  //     });
  
  //     // 🔥 EMAIL SEND
  //     await emailjs.send(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       {
  //         name: this.enquiry.name,
  //         mobile: this.enquiry.mobile,
  //         location: this.enquiry.location,
  //         type: this.enquiry.type,
  //         description: this.enquiry.description || 'N/A'
  //       },
  //       'YOUR_PUBLIC_KEY'
  //     );
  
  //     alert('✅ Enquiry submitted & email sent');
  
  //     // RESET
  //     this.enquiry = {
  //       name: '',
  //       mobile: '',
  //       location: '',
  //       type: '',
  //       description: ''
  //     };
  
  //     this.showOtherField = false;
  
  //   } catch (err) {
  //     console.error(err);
  //     alert('❌ Something went wrong');
  //   }
  
  //   this.isSubmitting = false;
  //   console.log("🔥 Submit clicked", this.enquiry);
  // }

  async submitEnquiry() {

    console.log("🔥 Submit started");
  
    try {
  
      const ref = collection(this.firestore, 'enquiries');
      console.log("📦 Firebase ref created");
  
      await addDoc(ref, {
        ...this.enquiry,
        createdAt: new Date()
      });
  
      console.log("✅ Firebase saved");
  

      await emailjs.send(
        'service_pvxk7ul',   // ✅ NEW service
        'template_2n3k597',
        {
          name: this.enquiry.name,
          mobile: this.enquiry.mobile,
          location: this.enquiry.location,
          type: this.enquiry.type,
          description: this.enquiry.description || 'N/A'
        },
        'oFDUXP_wTuYXGM6jq'
      );
    } catch (err) {
      console.error("❌ ERROR:", err);
    }
  
  }

}