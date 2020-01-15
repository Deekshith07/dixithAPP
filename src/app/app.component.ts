import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  title2 = 'my-app2';

  pop(){
    this.title='Hi Welcome';
    this.title2='Hi Welcome2';
    alert("Hi");
  }
}
