import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() heroDataToPass
  
  constructor() { }

  public name: string = 'ibrahim'

  public colors: Array<string> = ['red', 'blue', 'black']
  
  ngOnInit(): void {
  }

  handleSubmit(value) {
    console.log('form value : ', value)
  }

}
