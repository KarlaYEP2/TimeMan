import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'stringDate'
})
export class StringDateFormatPipe implements PipeTransform {
  transform(value: any): any {

    return value
  }
}
