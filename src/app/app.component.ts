import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtCommas = 
`Lorem Ipsum is, simply, dummy text,,, of the ,,printing 
and typesetting , , , industry. Lorem Ipsum, has been, the industry's standard dummy, 
text, ever , since the 1500s, when an unknown ,,, printer ,
,took a galley of type, and ,scrambled ,, it to make a type specimen book. `;

  txt1 = this.txtCommas;

  changeText1(){
    this.txt1 += ' 1';
  }
  changeText2(){
    this.txt1 += ' 2';
  }
  changeText3(){
    let a = this.txt1.replace(/\r?\n|\r/,"").split(',');

    // trim each element
    a.forEach((v,i,arr)=>{
      arr[i] = v.trim();
    });

    // remove empty elements
    var b = a.filter((e)=>{
      return e != null && e != "";
    })
    
    this.txt1 = b.join('\n, ');
  }  

//title = 'testText';
//
//   txt1 = 
// `text line 1
// text line 2`;

}
