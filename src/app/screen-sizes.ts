import { conditionallyCreateMapObjectLiteral } from "@angular/compiler/src/render3/view/util"

export interface ScreenSize{
    screenname: String,
    screensize: number
}

let screens: ScreenSize[] = [
    {screenname: "mobile",
    screensize: 480},
  
    {screenname: "tablet",
    screensize: 768},
  
    {screenname: "laptop",
    screensize: 1024},
  
    {screenname: "desktop",
    screensize: 1200}
  ]