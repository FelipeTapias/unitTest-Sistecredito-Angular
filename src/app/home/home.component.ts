import { Component, OnInit } from '@angular/core';
import { dataHome } from './home-data.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataHome: dataHome;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getDataHome().subscribe(resp => {
      this.dataHome = resp;
    });
  }

}
