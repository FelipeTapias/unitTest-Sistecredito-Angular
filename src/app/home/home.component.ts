import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { dataHome } from './home-data.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  dataHome: dataHome;
  mySubscription: Subscription

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.mySubscription = this.homeService.getDataHome().subscribe(resp => {
      this.dataHome = resp;
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
