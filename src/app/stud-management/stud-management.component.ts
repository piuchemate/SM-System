import { Component } from '@angular/core';

@Component({
  selector: 'app-stud-management',
  templateUrl: './stud-management.component.html',
  styleUrls: ['./stud-management.component.css']
})
export class StudManagementComponent {
// dynamic data (can be changed anytime)
  role = 'Steudent';
  welcomeText = 'Welcome, Student';
  description = 'Access your classes and track your performance';

  tiles = [
    {
      icon: 'assets/my-classes',
      title: 'My Courses',
      subtitle: 'View, enroll'
    },
    {
      icon: 'assets/icons/list.png',
      title: 'Homework',
      subtitle: 'View, submit'
    }
  ];
}
