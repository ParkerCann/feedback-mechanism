import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { ResizerComponent } from '../resizer/resizer.component';
import { RatingComponentComponent } from '../rating-component/rating-component.component';
import { MatStepper } from '@angular/material/stepper';

interface pageData{
  name: string,
  affiliation: string,
  q1Text: string,
  q1Answer: number,
  q2Text: string,
  q2Answer: number,
  q3Text: string,
  q3Answer: number,
  q4Text: string,
  q4Answer: number,
  q5Text: string,
  q5Answer: number,
  q6Text: string,
  q6Answer: number,
  q7Text: string,
  q7Answer: number,
  q8Text: string,
  q8Answer: number,
  q9Text: string,
  q9Answer: number,
  q10Text: string,
  q10Answer: number,
  comment: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(RatingComponentComponent) child: any | undefined;
  @ViewChild('question1') question1: any | undefined;
  @ViewChild('question2') question2: any | undefined;
  @ViewChild('question3') question3: any | undefined;
  @ViewChild('question4') question4: any | undefined;
  @ViewChild('question5') question5: any | undefined;
  @ViewChild('question6') question6: any | undefined;
  @ViewChild('question7') question7: any | undefined;
  @ViewChild('question8') question8: any | undefined;
  @ViewChild('question9') question9: any | undefined;
  @ViewChild('question10') question10: any | undefined;

  pageData: pageData = {
    name: '',
    affiliation: '',
    q1Answer: 0,
    q2Answer: 0,
    q3Answer: 0,
    q4Answer: 0,
    q5Answer: 0,
    q6Answer: 0,
    q7Answer: 0,
    q8Answer: 0,
    q9Answer: 0,
    q10Answer: 0,
    comment: '',
    q1Text: '',
    q2Text: '',
    q3Text: '',
    q4Text: '',
    q5Text: '',
    q6Text: '',
    q7Text: '',
    q8Text: '',
    q9Text: '',
    q10Text: ''
  }

  test(){
    console.log(this.name.valid);
  }

  constructor() {
   }

  ngOnInit(): void {
    
  }
  
  //https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
  @Input() screenMode: string = "";
  @Input() selectedVal: number = 0;

  calculateScreenMode(){
    if(this.screenMode == "desktop"){
      return "body-desktop";
    }
    else if(this.screenMode == "laptop"){
      return "body-laptop";
    }
    else if(this.screenMode == "tablet"){
      return "body-tablet";
    }
    else if(this.screenMode == "mobile"){
      return "body-mobile";
    }
    else{
      return "body-desktop";
    }
  }

  calculateVerticalMargin(){
    if(this.screenMode == "desktop" || this.screenMode == "laptop"){
      return "large-vertical-margin";
    }
    else{
      return "small-vertical-margin";
    }
  }

  mobileQuestionCounter(){
    if(this.screenMode == "mobile" || this.screenMode == "tablet"){
      return "mobileQuestionCounter"
    }
    else if(this.screenMode == "laptop"){
      return "laptopQuestionCounter"
    }
    else{
      return "questionCounter"
    }
  }

  answerCounter: number = 0;

  updateCounter(){
    this.answerCounter = 
    this.question1.isAnswered + 
    this.question2.isAnswered + 
    this.question3.isAnswered + 
    this.question4.isAnswered + 
    this.question5.isAnswered + 
    this.question6.isAnswered + 
    this.question7.isAnswered + 
    this.question8.isAnswered + 
    this.question9.isAnswered + 
    this.question10.isAnswered;
  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goForward(stepper: MatStepper){
      stepper.next();
  }

  mobileFontSize(){
    if(this.screenMode == "mobile"){
      return "mobileFontSize";
    }
    else{
      return ""
    }
  }

  mobileFooter(){
    if(this.screenMode == "mobile"){
      return "footer";
    }
    else{
      return ""
    }
  }

  mobileFooterMargin(){
    if(this.screenMode == "mobile"){
      return "footer-margin";
    }
    else{
      return ""
    }
  }

  submit(){
    this.pageData.q1Answer = this.question1.selectedVal;
    this.pageData.q2Answer = this.question2.selectedVal;
    this.pageData.q3Answer = this.question3.selectedVal;
    this.pageData.q4Answer = this.question4.selectedVal;
    this.pageData.q5Answer = this.question5.selectedVal;
    this.pageData.q6Answer = this.question6.selectedVal;
    this.pageData.q7Answer = this.question7.selectedVal;
    this.pageData.q8Answer = this.question8.selectedVal;
    this.pageData.q9Answer = this.question9.selectedVal;
    this.pageData.q10Answer = this.question10.selectedVal;

    this.pageData.q1Text = this.question1.questionText;
    this.pageData.q2Text = this.question2.questionText;
    this.pageData.q3Text = this.question3.questionText;
    this.pageData.q4Text = this.question4.questionText;
    this.pageData.q5Text = this.question5.questionText;
    this.pageData.q6Text = this.question6.questionText;
    this.pageData.q7Text = this.question7.questionText;
    this.pageData.q8Text = this.question8.questionText;
    this.pageData.q9Text = this.question9.questionText;
    this.pageData.q10Text = this.question10.questionText;

    console.log(this.pageData);
  }

  @ViewChild('name') name: any | undefined;

  validateInfo(){
    if (this.name.valid == true) {
      return true
    } else {
      return false
    }
  }
}