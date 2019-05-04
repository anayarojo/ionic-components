import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthdate: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event);
          console.log(event.day.value);
        }
      }, {
        text: 'Log',
        handler: (event) => {
          console.log('Clicked Log. Do not Dismiss.');
          console.log(event);
          return false;
        }
      }]
    }

  }

  onChangeDate(event) {
    // console.log('ionChange', event);
    console.log('ionChange', new Date(event.detail.value));
  }

}
