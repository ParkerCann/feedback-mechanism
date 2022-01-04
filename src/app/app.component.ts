import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-feedback';

  //https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
  screenMode: string = "";

  getScreenMode($event: string){
    this.screenMode = $event;
  }
}