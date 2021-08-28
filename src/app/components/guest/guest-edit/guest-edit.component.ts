import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss'],
})
export class GuestEditComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription: any;
  savedChanges: boolean = false;
  docId: String = 'fakeId';
  docData: any;

  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.docId = this._route.snapshot.paramMap.get('id')!;
    this.getData(this.docId);
  }
  getData(docId: any) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getGuest(docId).subscribe(
      (res: any) => {
        if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = '';
          this.dataLoading = false;
          this.docData = res['data']['0'];
        } else {
          this.error = true;
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
          this.savedChanges = true;
        }
      },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
        this.savedChanges = true;
      },
      () => {
        this.dataLoading = false;
      }
    );
  }
  setGuest(formData: any) {
    this.dataLoading = true;
    if (this.docId) {
      formData._id = this.docId;
    }
    this.querySubscription = this._backendService
      .updateGuest(formData)
      .subscribe(
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

  deleteGuest() {
    if (confirm('Are you sure want to delete this record ?')) {
      this.dataLoading = true;
      let formData = { _id: this.docId };
      this.querySubscription = this._backendService
        .deleteGuest(formData)
        .subscribe(
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
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
