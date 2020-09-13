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

  ShowChild(){
    this.showTest = !this.showTest;
  }
  getChildData(val){
    this.showTest = val
  }
}
