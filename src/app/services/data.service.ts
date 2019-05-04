import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComponent } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuList() {
    return this.http.get<IComponent[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes() {
    return this.http.get('/assets/data/superheroes.json').pipe(delay(3000));
  }
}
