import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  public checkInHostId: any;
  public checkInHostName: any;
  public checkInGuestId: any;
  public checkInGuestName: any;

  constructor(private _http: HttpClient) {}

  login(formData: any) {
    /**
     let fakeResponse_1 = {
       "errorCode" : 0,
       "errorMessage" : "User Id is invalid",
       "rowCount" : "30",
       "data": {
         "token" : "abcd"
       }
     };
     let fakeResponse_2 = {
      "errorCode" : 0,
      "errorMessage" : "Password not valid.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "Authentication Successful.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
     return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
     */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/login',
      formData,
      httpOptions
    );
  }

  setUser(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "User Id is taken",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    let fakeResponse_2 = {
     "errorCode" : 0,
     "errorMessage" : "Password not strong enough.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   let fakeResponse_3 = {
     "errorCode" : 1,
     "errorMessage" : "Authentication Successful.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
    return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_1)}, 2000)});
    */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/signup',
      formData,
      httpOptions
    );
  }

  setHost(formData: any) {
    /**
   let fakeResponse_1 = {
     "errorCode" : 0,
     "errorMessage" : "Host Already exists..",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   let fakeResponse_2 = {
     "errorCode" : 1,
     "errorMessage" : "Host Created.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/sethost',
      formData,
      httpOptions
    );
  }

  getHost(docId: any) {
    let formData = { _id: '' };
    formData._id = docId;

    let fakeResponse_1 = {
      errorCode: 0,
      errorMessage: 'ID Not found',
      rowCount: '30',
      data: {
        noVal: '',
      },
    };
    let fakeResponse_3 = {
      errorCode: 1,
      errorMessage: '',
      rowCount: '30',
      data: {
        inputName: 'Amit',
        inputAddress: '123 Main St',
        inputEmail: 'amit@elishconsulting.com',
        inputPhone: '1234567890',
        inputComments: 'Test',
      },
    };
    return Observable.create(
      (observer: {
        next: (arg0: {
          errorCode: number;
          errorMessage: string;
          rowCount: string;
          data: {
            inputName: string;
            inputAddress: string;
            inputEmail: string;
            inputPhone: string;
            inputComments: string;
          };
        }) => void;
      }) => {
        setTimeout(() => {
          observer.next(fakeResponse_3);
        }, 2000);
      }
    );

    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/gethost',
      formData,
      httpOptions
    );
  }
  updateHost(formData: any) {
    /*
   let fakeResponse_1 = {
     "errorCode" : 0,
     "errorMessage" : "Host Already exists..",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   let fakeResponse_2 = {
     "errorCode" : 1,
     "errorMessage" : "Host Created.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/updatehost',
      formData,
      httpOptions
    );
  }
  deleteHost(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "ID Not found",
      "rowCount" : "30",
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "inputName" : "Amit",
        "inputAddress": "123 Main St",
        "inputEmail": "amit@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test"
      }
    };
    return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
    */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/deletehost',
      formData,
      httpOptions
    );
  }
  getHosts(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "No Data found",
      "rowCount" : 0,
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : 30,
      "data": [{
        "_id": 1,
        "inputName" : "Amit",
        "inputAddress": "123 Main St",
        "inputEmail": "amit@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      },
      {
        "_id": "2",
        "inputName" : "Mike",
        "inputAddress": "123 Main St",
        "inputEmail": "Mike@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      },
      {
        "_id": "3",
        "inputName" : "Jeff",
        "inputAddress": "123 Main St",
        "inputEmail": "Jeff@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      }]
    };
   return of(fakeResponse_3);
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/gethosts',
      formData,
      httpOptions
    );
  }
  setGuest(formData: any) {
    /**
   let fakeResponse_1 = {
     "errorCode" : 0,
     "errorMessage" : "Guest Already exists..",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   let fakeResponse_2 = {
     "errorCode" : 1,
     "errorMessage" : "Guest Created.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/setguest',
      formData,
      httpOptions
    );
  }

  getGuest(docId: any) {
    let formData = { _id: '' };
    formData._id = docId;
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "ID Not found",
      "rowCount" : "30",
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "inputName" : "Amit",
        "inputAddress": "123 Main St",
        "inputEmail": "amit@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test"
      }
    };
    return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
    */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/getguest',
      formData,
      httpOptions
    );
  }
  updateGuest(formData: any) {
    /**
   let fakeResponse_1 = {
     "errorCode" : 0,
     "errorMessage" : "Guest Already exists..",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   let fakeResponse_2 = {
     "errorCode" : 1,
     "errorMessage" : "Guest Created.",
     "rowCount" : "30",
     "data": {
       "token" : "abcd"
     }
   };
   return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/updateguest',
      formData,
      httpOptions
    );
  }
  deleteGuest(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "ID Not found",
      "rowCount" : "30",
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "inputName" : "Amit",
        "inputAddress": "123 Main St",
        "inputEmail": "amit@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test"
      }
    };
    return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
    */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/deleteguest',
      formData,
      httpOptions
    );
  }
  getGuests(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "No Data found",
      "rowCount" : 0,
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : 30,
      "data": [{
        "_id": 1,
        "inputName" : "Amit",
        "inputAddress": "123 Main St",
        "inputEmail": "amit@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      },
      {
        "_id": "2",
        "inputName" : "Mike",
        "inputAddress": "123 Main St",
        "inputEmail": "Mike@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      },
      {
        "_id": "3",
        "inputName" : "Jeff",
        "inputAddress": "123 Main St",
        "inputEmail": "Jeff@elishconsulting.com",
        "inputPhone": "1234567890",
        "inputComments": "Test",
        "pic": "abcd.jpeg"
      }]
    };
   return of(fakeResponse_3);
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/getguests',
      formData,
      httpOptions
    );
  }
  setCheckIn(hostId: any, hostName: any, guestId: any, guestName: any) {
    if (hostId) {
      this.checkInHostId = hostId;
      this.checkInHostName = hostName;
    }
    if (guestId) {
      this.checkInGuestId = guestId;
      this.checkInGuestName = guestName;
    }
  }
  setRegister(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "Entry Already exists..",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    let fakeResponse_2 = {
      "errorCode" : 1,
      "errorMessage" : "Entry Created.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
    */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/setregister',
      formData,
      httpOptions
    );
  }
  getRegister(formData: any) {
    /**
    let fakeResponse_1 = {
      "errorCode" : 0,
      "errorMessage" : "No Data found",
      "rowCount" : 0,
      "data": {
        noVal : ""
      }
    };
    let fakeResponse_3 = {
      "errorCode" : 1,
      "errorMessage" : "",
      "rowCount" : 30,
      "data": [{
        "_id": 1,
        "hostId" : "1",
        "hostName": "Amit",
        "guestId": "3",
        "guestName": "Mike",
        "checkInDTTM": "Data Time",
        "purpose": "visit is personal"
      },
      {
        "_id": "2",
        "hostId" : "1",
        "hostName": "Amit",
        "guestId": "3",
        "guestName": "Mike",
        "checkInDTTM": "Data Time",
        "purpose": "visit is personal"
      },
      {
        "_id": "3",
        "hostId" : "1",
        "hostName": "Amit",
        "guestId": "3",
        "guestName": "Mike",
        "checkInDTTM": "Data Time",
        "purpose": "visit is personal"
      }]
    };
   return of(fakeResponse_3);
   */
    let token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : 'abcd';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token!,
      }),
    };
    return this._http.post(
      'http://localhost:3000/getregister',
      formData,
      httpOptions
    );
  }
}
