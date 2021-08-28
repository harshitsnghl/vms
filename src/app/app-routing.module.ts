import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GuestAddComponent } from './components/guest/guest-add/guest-add.component';
import { GuestEditComponent } from './components/guest/guest-edit/guest-edit.component';
import { GuestResultComponent } from './components/guest/guest-result/guest-result.component';
import { GuestSearchComponent } from './components/guest/guest-search/guest-search.component';
import { HostAddComponent } from './components/host/host-add/host-add.component';
import { HostEditComponent } from './components/host/host-edit/host-edit.component';
import { HostResultComponent } from './components/host/host-result/host-result.component';
import { HostSearchComponent } from './components/host/host-search/host-search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterResultComponent } from './components/register-result/register-result.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'host-add',
    component: HostAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'host-edit/:id',
    component: HostEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'host-search',
    component: HostSearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'host-result',
    component: HostResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'host-result/:inputName:inputAddress:inputEmail:inputPhone',
    component: HostResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'guest-add',
    component: GuestAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'guest-edit/:id',
    component: GuestEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'guest-search',
    component: GuestSearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'guest-result',
    component: GuestResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'guest-result/:inputName:inputAddress:inputEmail:inputPhone',
    component: GuestResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register-result',
    component: RegisterResultComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/aboutus', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
