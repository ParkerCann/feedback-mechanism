import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizerComponent } from './resizer/resizer.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { DestructiveButtonComponent } from './destructive-button/destructive-button.component';
import { RegularSecondaryBtnComponent } from './regular-secondary-btn/regular-secondary-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ResizerComponent,
    RatingComponentComponent,
    PrimaryButtonComponent,
    DestructiveButtonComponent,
    RegularSecondaryBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
