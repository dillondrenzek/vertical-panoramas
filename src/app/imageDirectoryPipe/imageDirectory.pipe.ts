import { Pipe, PipeTransform } from '@angular/core';

const IMAGE_DIR_PATH: string = '/public/img/';


@Pipe({
  name: 'imgDirUrl'
})
export class ImageDirectoryPipe implements PipeTransform {


  transform(value: string, args: any[]): string {
    return IMAGE_DIR_PATH + value.replace('/','');
  }
}
