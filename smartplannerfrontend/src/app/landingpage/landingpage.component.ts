import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  welcomeMessage = "Welcome to smartplanner, we make your time productive"

//Activated route
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params['name']
  }
}
