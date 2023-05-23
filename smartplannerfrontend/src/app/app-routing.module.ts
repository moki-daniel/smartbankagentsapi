import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const routes: Routes = [
  //login route
  {path: ' ', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'landingpage/:name', component: LandingpageComponent },
  {path: 'todos', component: ListTodosComponent },
  {path: '**', component: ErrorcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

