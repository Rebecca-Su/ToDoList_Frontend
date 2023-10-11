import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.scss']
})
export class TaskMenuComponent {
  menuProperties = [
    {
      id: 'main_page',
      icon: 'home',
      title: 'Home',
      url: 'task-list',
      numberOfElements: 0,
    },
    {
      id: 'today',
      icon: 'flare',
      title: 'Today',
      url: 'task-list/display/today',
      numberOfElements: 0,
    },
    {
      id: 'categories',
      icon: 'category',
      title: 'Categories',
      url: 'categories',
      numberOfElements: 0,
    },
    {
      id: 'profile',
      icon: 'account_circle',
      title: 'Profile',
      url: 'profile',
      numberOfElements: 0,
    },
  ];

  constructor(
    public router: Router
  ) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
    console.log("Task menu loaded");
  }
}
