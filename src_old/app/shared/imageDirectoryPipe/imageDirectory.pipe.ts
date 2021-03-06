import { Pipe, PipeTransform } from '@angular/core';

const IMAGE_DIR_PATH: string = '/public/img/';


@Pipe({
  name: 'imgUrl'
})
export class ImageDirectoryPipe implements PipeTransform {


  transform(value: string, args: any[]): string {
    return (value) ? IMAGE_DIR_PATH + value.replace('/','') : '';
  }
}
