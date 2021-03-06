import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string;

  public name: string = "name is brahim";

  public test = 'hello';

  public dataToPass: Array<number> = [1, 2, 3, 4, 5]

  ngOnInit() {
    this.title = 'hi'
  }

  greet(name: string) {
    return "hi " + name
  }

  getTest() {
    console.log(this.test)
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  handleTestChange(e) {
    this[e.target.name] = e.target.value
  }

  getName(name?) {
    if (name) {
      alert("My name is " + name)
    } else {
      alert("My name is " + this.name)
    }
  }

  log(val) {
    console.log(val)
  }
}
