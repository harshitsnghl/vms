import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-search',
  templateUrl: './guest-search.component.html',
  styleUrls: ['./guest-search.component.scss'],
})
export class GuestSearchComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}
  getGuests(formData: any) {
    this._router.navigate(['/guest-result'], {
      queryParams: {
        inputName: formData.inputName,
        inputAddress: formData.inputAddress,
        inputEmail: formData.inputEmail,
        inputPhone: formData.inputPhone,
      },
    });
  }
}
