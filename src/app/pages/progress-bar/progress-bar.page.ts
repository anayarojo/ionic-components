import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcent: Number = 0.5;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event) {
    //console.log(event);
    this.porcent = event.detail.value / 100;
  }

}
