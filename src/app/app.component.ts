import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testText';
  txt1 = 
`text line 1
text line 2`;

  changeText1(){
    this.txt1 += ' 1';
  }
  changeText2(){
    this.txt1 += ' 2';
  }
}
