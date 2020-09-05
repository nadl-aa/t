import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  myFileName = 'my-custom-file.yaml';
  fileUrl = 'assets/FIU.yaml';
  constructor() { }

  ngOnInit() {
  }

}
