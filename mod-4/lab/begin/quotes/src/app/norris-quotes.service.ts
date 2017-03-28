import { Injectable } from '@angular/core';

@Injectable()
export class NorrisQuotesService {

  constructor() { }

  getQuotes(): string[] {
    return [
      "Chuck Norris once heard that nothing can kill him, so he tracked down nothing and killed it.",
      "Why hasn't a video game been made about Chuck Norris? Simple: nobody controls Chuck Norris.",
      "Chuck Norris was bitten by a cobra and after five days of excruciating pain... the cobra died.",
      "Chuck Norris has a diary. It's called the Guinness Book of World Records.",
      "If Chuck Norris was a Spartan in the movie 300, the movie would be called 1.",
      "Chuck Norris counted to infinity. Twice.",
      "Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs.",
      "Chuck Norris once fought superman. The loser had to wear his underwear over his pants.",
      "Chuck Norris once kicked a horse in the chin. Its descendants today are known as giraffes.",
      "Chuck Norris makes fire by rubbing 2 ice cubes together.",
      "Chuck Norris doesn't cheat death. He wins fair and square.",
      "Chuck Norris knows Victoria's secret.",
      "Mistakes learn from Chuck Norris.",
      "Chuck Norris can kill two stones with one bird.",
      "They wanted to put Chuck Norris's face on Mount Rushmore, but the granite wasn't hard enough for his beard.",
      "Chuck Norris can delete the Recycling Bin.",
      'Obama said, "Yes we can." Chuck Norris says, "I already did.".',
      "Chuck Norris has already been to Mars. That's why there are no signs of life.",
      "When Chuck Norris was born he drove his mom home from the hospital.",
      "Chuck Norris's calendar goes straight from March 31st to April 2. No one fools Chuck Norris.",
    ]
  }

}
