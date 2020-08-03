import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:String;
  public subtitle:String;
  public email:String;


  constructor() { 
    this.title="About Me";
    this.subtitle="Portfolio YSCT";
    this.email="example@example.com";
  }

  ngOnInit(): void {
  }

}
