import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(value: string[], cnt: number = 5): string[] {
    // let cnt: number = 5;

    // if (args) cnt = args;

    return value.concat()
      .sort( () => Math.random() - 0.5)
      .slice(0, cnt);
  }

}
