import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserGuard } from './guard/application-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'todo-list', component: TaskListComponent, canActivate: [UserGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
