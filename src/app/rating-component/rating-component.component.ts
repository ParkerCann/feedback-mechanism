import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.css']
})
export class RatingComponentComponent implements OnInit {

  likertScaleVal?: number;
  isAnswered: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() questionText: string | undefined;

  value1: boolean = false;
  value2: boolean = false;
  value3: boolean = false;
  value4: boolean = false;
  value5: boolean = false;

  selectedVal: number = 0;

  toggleValue(){
    this.value1 = false;
    this.value2 = false;
    this.value3 = false;
    this.value4 = false;
    this.value5 = false;
    this.isAnswered = 1;
  }

  toggleSelectedVal(val: number){
    this.selectedVal = val;
  }

  //https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
  @Input() screenMode: string = "";

  calculateLabelFont(){
    if(this.screenMode == "desktop"){
      return "font-desktop";
    }
    else if(this.screenMode == "laptop"){
      return "font-laptop";
    }
    else if(this.screenMode == "tablet"){
      return "font-tablet";
    }
    else if(this.screenMode == "mobile"){
      return "font-mobile";
    }
    else{
      return "font-desktop";
    }
  }

  mobileFormattingBtns(){
    if(this.screenMode == "mobile"){
      return "break";
    }
    return "";
  }

  calculateBackground(){
    if(this.screenMode == "mobile"){
      return "solid-btns";
    }
    return "";
  }

  btnFormatting(){
    if(this.screenMode == "desktop"){
      return "btn-desktop";
    }
    else if(this.screenMode == "laptop"){
      return "btn-laptop";
    }
    else if(this.screenMode == "tablet"){
      return "btn-tablet";
    }
    else if(this.screenMode == "mobile"){
      return "btn-mobile";
    }
    else{
      return "btn-desktop";
    }
  }

  labelFormatting(){
    if(this.screenMode == "desktop"){
      return "lbl-desktop";
    }
    else if(this.screenMode == "laptop"){
      return "lbl-laptop";
    }
    else if(this.screenMode == "tablet"){
      return "lbl-tablet";
    }
    else if(this.screenMode == "mobile"){
      return "lbl-mobile";
    }
    else{
      return "lbl-desktop";
    }
  }

  changeBtn(val: number){
    if(this.selectedVal == val){
      return "active-background"
    }
    else{
      return ""
    }
  }

}
