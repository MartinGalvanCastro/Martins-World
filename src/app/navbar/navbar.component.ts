import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  socialMediaRoute = ["assets/img/GitHub.svg","assets/img/Linkedin.svg"];
  constructor() { }

  ngOnInit() {
  }



}
