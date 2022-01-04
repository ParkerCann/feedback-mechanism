import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.css']
})
export class ResizerComponent implements OnInit {

  constructor() { }

  public getScreenWidth: any;
  public getScreenHeight: any;

  public getScreenName: string = "";

  logScreenSize(){
    console.log("width: ", this.getScreenWidth, "; height: ", this.getScreenHeight);
  }
  
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.changeSize();
  }
  
  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.changeSize();
  }

  changeSize(){
    if(this.getScreenWidth <= 480 && this.getScreenName !== "mobile"){
      this.getScreenName = "mobile";
    }
    else if(this.getScreenWidth > 480 && this.getScreenWidth <= 768  && this.getScreenName !== "tablet"){
      this.getScreenName = "tablet";
    }
    else if(this.getScreenWidth > 768 && this.getScreenWidth <= 1024 && this.getScreenName !== "laptop"){
      this.getScreenName = "laptop";
    }
    else if(this.getScreenWidth > 1024  && this.getScreenName !== "desktop"){
      this.getScreenName = "desktop";
    }

    this.sendScreenStatus.emit(this.getScreenName);
  }

  //https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
  @Output() sendScreenStatus = new EventEmitter<string>();

}
