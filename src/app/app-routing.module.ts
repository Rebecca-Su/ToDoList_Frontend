import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserGuard } from './guard/application-guard';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { TaskCategoriesComponent } from './task-categories/task-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'task-list',
    component: TaskListComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'task-list/display/:start',
    component: TaskListComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'task-list/new',
    component: CreateTasksComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'task-list/new/:taskId',
    component: CreateTasksComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'categories',
    component: TaskCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'categories/new',
    component: CreateCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'categories/new/:categoryId',
    component: CreateCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
