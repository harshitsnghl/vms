import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-host-add',
  templateUrl: './host-add.component.html',
  styleUrls: ['./host-add.component.scss'],
})
export class HostAddComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription: any;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService) {}

  ngOnInit() {}

  setHost(formData: any) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setHost(formData).subscribe(
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
      (error: any) => {
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
