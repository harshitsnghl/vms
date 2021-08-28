import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-guest-add',
  templateUrl: './guest-add.component.html',
  styleUrls: ['./guest-add.component.scss'],
})
export class GuestAddComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription: any;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService) {}

  ngOnInit() {}

  setGuest(formData: any) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setGuest(formData).subscribe(
      (res: any) => {
        if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = '';
          this.dataLoading = false;
          this.savedChanges = true;
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

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
