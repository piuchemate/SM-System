import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMSystem';
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
