import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private platform: Platform) { }

  xs() {
    return this.platform.width() <= 540;
  }

  sm() {
    return this.platform.width() >= 576;
  }

  md() {
    return this.platform.width() >= 768;
  }

  lg() {
    return this.platform.width() >= 992;
  }

  xl() {
    return this.platform.width() >= 1200;
  }
}
