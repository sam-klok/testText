import { Component } from '@angular/core';
import { ConvertLib } from './convertLib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testTxtCommas = 
`Lorem Ipsum is, simply; dummy text||,,, of the ,,printing
and typesetting | ; , , , industry. Lorem Ipsum,; has ;;been, the industry's sta||ndard dummy,
blah with space 
text, eve;r , since the 1500s, when an unknown ,,, printer ,
,took a galley| of ||type, and ,scrambled ,, it to make|  a type ||specimen book. `;

  txt1 = this.testTxtCommas;

  changeText(splitter:string){
    let convertLib = new ConvertLib();
    this.txt1 = convertLib.convertLinesToColumn(this.txt1, splitter);
  }

  //txt0 = this.testTxtCommas;
  
  // testChangeText1(){
  //   this.txt1 += ' 1';
  // }

  // testChangeText2(){
  //   this.txt1 += ' 2';
  // }

  // testTextRevert(){
  //   this.txt1 = this.testTxtCommas;    
  // }

}
