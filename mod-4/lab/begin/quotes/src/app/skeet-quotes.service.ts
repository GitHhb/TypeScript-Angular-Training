import { Injectable } from '@angular/core';

@Injectable()
export class SkeetQuotesService {

  constructor() { }

  getQuotes(): string[] {
    return [
      "Jon Skeet is immutable. If something's going to change, it's going to have to be the rest of the universe.",
      "Anonymous methods and anonymous types are really all called Jon Skeet. They just don't like to boast.",
      "Jon Skeet's code doesn't follow a coding convention. It is the coding convention.",
      "Jon Skeet doesn't have performance bottlenecks. He just makes the universe wait its turn.",
      "Jon Skeet is the only person who has ranked higher than Jon Skeet in the SO all-time rep league.",
      "Users don't mark Jon Skeet's answers as accepted. The universe accepts them out of a sense of truth and justice.",
      "Jon Skeet can divide by zero. Twice.",
      "Jon Skeet is the only top 100 SO user who is human. The others are bots that he coded to pass the time between questions.",
      "Jon Skeet coded his last project entirely in Microsoft Paint, just for the challenge.",
      "Jon Skeet does not use exceptions when programming. He has not been able to identify any of his code that is not exceptional.",
      "When Jon Skeet's code fails to compile the compiler apologises.",
      'When you search for "guru" on Google it says "Did you mean Jon Skeet?"',
      "Jon Skeet can recite p. Backwards.",
      "When Jon Skeet points to null, null quakes in fear.",
      'Donald Knuth wears a "Jon Skeet is my Homeboy" t-shirt to show off at parties.',
      "Jon Skeet is the traveling salesman. Only he knows the shortest route.",
      "Q: Can Jon Skeet ask a question that even Jon Skeet can't answer? A: Yes. And he can answer it, too.",
      "Google is Jon Skeet behind a proxy.",
      "Jon Skeet does not recognize anonymous types in .net .. he knows everyone of them and where they live.",
      "There is no 'CTRL' button on Jon Skeet's computer. Jon Skeet is always in control.",
      "The only time Jon Skeet was wrong was when he thought he had made a mistake."
    ]
  }

}
