import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription: any;
  savedChanges: boolean = false;

  constructor(
    private _backendService: BackendService,
    private _route: Router
  ) {}

  ngOnInit() {
    if (window.localStorage.getItem('token')) {
      this.savedChanges = true;
    }
  }

  login(formData: any) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.login(formData).subscribe(
      (res: any) => {
        if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = '';
          this.dataLoading = false;
          window.localStorage.setItem('token', res['data'].token);
          this.savedChanges = true;
          // this._route.navigate(['/aboutus']);
        } else {
          this.error = true;
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
        }
      },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
      }
    );
  }

  logout() {
    window.localStorage.removeItem('token');
    this.savedChanges = false;
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
