import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorcomponent',
  templateUrl: './errorcomponent.component.html',
  styleUrls: ['./errorcomponent.component.css']
})
export class ErrorcomponentComponent implements OnInit {

errorMessageAlert = "Oops you encountered an error contact +254736334075 for support"

  constructor() { }

  ngOnInit(): void {
  }

}
