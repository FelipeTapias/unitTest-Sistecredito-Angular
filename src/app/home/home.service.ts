import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { dataHome } from './home-data.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endPointRUL = 'https://api.nasa.gov/planetary/apod?api_key=Rdqnto3hpwtyd3ehG1XIhQoe4qxvxYgSqUE3lZ6k';

  constructor(private http: HttpClient) { }

  getDataHome(): Observable<dataHome> {
    return this.http.get<dataHome>(this.endPointRUL);
  }
}
