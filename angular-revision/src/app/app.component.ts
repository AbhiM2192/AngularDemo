import {Router } from '@angular/router'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-revision';
  heading = 'Welcoe to angular Demo App';
  public showTest=false;
  constructor(private router: Router){}
  ShowChild(){
    this.showTest = !this.showTest;
    this.router.navigateByUrl('/test',{state:{showTest:this.showTest}})
  }
  getChildData(val){
    this.showTest = val
  }
}
