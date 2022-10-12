import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marsPhotos } from './mars-photo.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endPointRUL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Rdqnto3hpwtyd3ehG1XIhQoe4qxvxYgSqUE3lZ6k'

  constructor(private http: HttpClient) { }

  getMarsPhotos(): Observable<marsPhotos> {
    return this.http.get<marsPhotos>(this.endPointRUL);
  }
}
