import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  images: string[] = [
  //  'hero/dash1.jpg',
  'hero/dash2.jpg',
  'hero/dash3.jpg',
  'hero/dash4.jpg',
  'hero/dash5.jpg'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }
}