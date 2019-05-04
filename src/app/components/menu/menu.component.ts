import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IComponent } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: Observable<IComponent[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuList();
  }

}
