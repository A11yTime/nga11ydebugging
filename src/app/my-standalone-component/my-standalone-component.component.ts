import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-standalone-component',
  standalone: true,
  imports: [], // Ensure HttpClientModule is imported here
  templateUrl: './my-standalone-component.component.html',
  styleUrls: ['./my-standalone-component.component.css'],
})
export class MyStandaloneComponent {
  data: any;

  constructor() {}

 
}
