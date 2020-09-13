import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public parentAllowed;
  @Output() public childHideData = new EventEmitter()
  title = 'This is a test component';
  name = 'Angular user';
  myId='testingCustompropertyBinding';
  specialClass= 'text-special';
  hasError=true;
  isSpecial=true;
  uname='';
  upass='';
  message={
    'text-success':!this.hasError,
    'text-danger':this.hasError,
    'text-special':this.isSpecial
  };
  bgroundLabel={
    'font-style':'italic',
    'font-size':'20px'
  }
  greet=false;
  colors=[{id:1,text:'red'},{id:2,text:'green'},{id:1,text:'blue'}]
  constructor() {
    console.log('loaded constructor')
   }

  ngOnInit(): void {
    console.log('loaded onInit')
  }
  greetUser(){
    return `hello ${this.uname}`;
  }
  changeTitle(val){
    this.title =val;
  }
  formSubmit(ev){
    ev.preventDefault();
    console.log(`The forms data is ${this.uname} and ${this.upass}`);
    this.greet = true
  }
  changeColor(color){
    document.body.style.backgroundColor = color;
  }
  hideTest(){
    this.childHideData.emit(false);
  }
}
