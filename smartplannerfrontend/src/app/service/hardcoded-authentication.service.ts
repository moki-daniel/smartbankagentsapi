import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    if(username==="smartplanner" && password === "smartplanner") {
      return true;
    }
    return false
  }
}
