import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../../environments/environment';

// Pipe per trasformare IMG
@Pipe({
  name: 'posterToImg'
})
export class PosterToImg implements PipeTransform {

  transform(poster: any): any {
    // URL Generica per recuperare img
    let url = environment.imgUrl;

    if (poster) {
      return url + poster;
    } else {
      if (poster) {
        return url + poster;
      } else {
         //Nessuna img presente, carico una generica
        return "assets/img/noimage.png";
      }
    }
  }

}