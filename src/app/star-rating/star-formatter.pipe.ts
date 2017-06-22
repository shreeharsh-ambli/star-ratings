import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starFormatter'
})
export class StarFormatterPipe implements PipeTransform {

  transform(rating: number): any {

    let formattedRating = "";
    let formattedCount: number;

    for(var count = 0; count < rating; count++)
    {
      formattedRating += "&starf;"
      formattedCount = count;
    }

    for(var count = 4; count > formattedCount; count--)
    {
      formattedRating += "&star;"
    }
    
    return formattedRating;
  }

}