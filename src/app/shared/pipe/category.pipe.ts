import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'js':
        return 'javascript';
      default:
        break;
    }

    return value.toLowerCase();
  }
}
