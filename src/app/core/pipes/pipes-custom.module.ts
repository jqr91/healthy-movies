import { NgModule } from '@angular/core';
import {PosterToImg} from "./posterToImg.pipe"; 
import {CommonModule} from "@angular/common";
@NgModule({
  declarations:[PosterToImg], 
  imports:[CommonModule],
  exports:[PosterToImg] 
})

export class PipesCustom{}