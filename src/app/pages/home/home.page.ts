import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { IComponent } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<IComponent[]>;

  constructor(private platform: Platform, private dataService: DataService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.components = this.dataService.getMenuList();
    console.log('Width: ' + this.platform.width());
    console.log('Height: ' + this.platform.height());
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
