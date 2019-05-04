import { Component, OnInit, Input } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(public sizeService: SizeService) { }

  ngOnInit() {}

}
