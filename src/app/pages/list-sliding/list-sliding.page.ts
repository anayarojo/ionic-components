import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {

  @ViewChild('slidingList') slidingList: IonList;

  users: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user: any) {
    // console.log('favorite', user);
    this.presentToast('Saved in favorites');
    this.slidingList.closeSlidingItems();
  }

  share(user: any) {
    // console.log('share', user);
    this.presentToast('Shared successfully');
    this.slidingList.closeSlidingItems();
  }

  trash(user: any) {
    // console.log('trash', user);
    this.presentToast('Removed successfully');
    this.slidingList.closeSlidingItems();
  }

  async presentToast(text: string, time: number = 2000) {

    const toast = await this.toastCtrl.create({
      message: text,
      duration: time,
      color: 'dark'
    });
    toast.present();
  }

}
