import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('png') png;
  @ViewChild('parg') paragraph;

  constructor() { }

  ngOnInit(): void {
    //alert(document.querySelector("#paragraph").innerHTML);
    //console.log(this.png);
    //console.log(this.paragraph);
  }

}
