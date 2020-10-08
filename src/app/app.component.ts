import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExitExam';
  public word = null;
  public result: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {

  }

  checkMinLength() {
    if (this.word.length < 20) {
      Swal.fire(
        'Information?',
        'Messages smaller than 20',
        'error'
      )
    }
  }

  submit() {
    this.result = [];
    this.appService.convertLowercase(this.word);
    this.appService.replaceCharacter();
    this.appService.splitWordWhiteSpace();
    this.result = this.appService.convertToResult();
    console.log(this.result);
  }
}
