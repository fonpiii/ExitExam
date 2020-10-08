import { Injectable } from '@angular/core';

export class Word {
  lowercase: string;
  character: string;
  whitespace: any[];
}

export class WordFrequency {
  word: string;
  freq: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private words: Word = {
    lowercase: '',
    character: '',
    whitespace: []
  };

  private wordfrequency: WordFrequency[] = [];

  constructor() { }

  convertLowercase(word: string) {
    this.words.lowercase = null;
    this.words.lowercase = word.toLowerCase();
  }

  replaceCharacter() {
    this.words.character = null;
    this.words.character = this.words.lowercase.split('?').join('');
    this.words.character = this.words.character.split('!').join('');
    this.words.character = this.words.character.split(',').join('');
    console.log(this.words.character);
  }

  splitWordWhiteSpace() {
    this.words.whitespace = null;
    var whiteSpace = this.words.character.split(" ");
    this.words.whitespace = whiteSpace;
    console.log(this.words.whitespace);
  }

  convertToResult(): any {
    this.wordfrequency = [];
    for (let i = 0; i < this.words.whitespace.length; i++) {
      var findData = this.wordfrequency.filter(x => x.word === this.words.whitespace[i]);
      if (findData.length === 0) {
        this.wordfrequency.push({word: this.words.whitespace[i], freq: 1});
      }
      else {
        var findIndex = this.wordfrequency.findIndex(x => x.word === this.words.whitespace[i]);
        this.wordfrequency[findIndex].freq++;
      }
    }
    console.log(this.wordfrequency);
    return this.wordfrequency;
  }
}
