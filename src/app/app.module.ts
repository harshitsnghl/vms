import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GuestAddComponent } from './components/guest/guest-add/guest-add.component';
import { GuestEditComponent } from './components/guest/guest-edit/guest-edit.component';
import { GuestResultComponent } from './components/guest/guest-result/guest-result.component';
import { GuestSearchComponent } from './components/guest/guest-search/guest-search.component';
import { HostAddComponent } from './components/host/host-add/host-add.component';
import { HostEditComponent } from './components/host/host-edit/host-edit.component';
import { HostResultComponent } from './components/host/host-result/host-result.component';
import { HostSearchComponent } from './components/host/host-search/host-search.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterResultComponent } from './components/register-result/register-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    GuestAddComponent,
    GuestEditComponent,
    GuestResultComponent,
    GuestSearchComponent,
    HostAddComponent,
    HostEditComponent,
    HostResultComponent,
    HostSearchComponent,
    RegisterResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
