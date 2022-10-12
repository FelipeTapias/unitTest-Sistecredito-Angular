import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { RootObject } from './mars-photo.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dataMarsPhotos: Array<RootObject>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getMarsPhotos().subscribe(resp => {
      console.log(resp.photos);
      
      this.dataMarsPhotos = resp.photos;
    });
  }

}
