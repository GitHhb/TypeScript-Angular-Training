import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: string[], quoteCount: number = 5): string[] {
    return value
      .concat()
      .sort(() => Math.random() - 0.5)
      .slice(0, quoteCount)
  }
}
