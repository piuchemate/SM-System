import { Component } from '@angular/core';

@Component({
  selector: 'app-cardtile-dashboard',
  templateUrl: './cardtile-dashboard.component.html',
  styleUrls: ['./cardtile-dashboard.component.css']
})
export class CardtileDashboardComponent {
 // dynamic data (can be changed anytime)
  role = 'Teacher';
  welcomeText = 'Welcome, Teacher';
  description = 'View class schedules and manage student progress';

  tiles = [
    {
      icon: 'assets/my-classes',
      title: 'My Classes',
      subtitle: 'Schedules, attendance',
      link: '/my-class'
    },
    {
      icon: 'assets/icons/list.png',
      title: 'Assignments',
      subtitle: 'Create, grade',
      link: ''
    }
  ];
}
