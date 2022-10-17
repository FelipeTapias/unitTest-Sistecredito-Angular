import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { of } from 'rxjs';
import { dataHome } from './home-data.interface';

const myDataHome: dataHome = {
  copyright: 'string',
  date: new Date(),
  explanation: 'string',
  hdurl: 'string',
  media_type: 'string',
  service_version: 'string',
  title: 'The new asteroid',
  url: 'string'
}


fdescribe('HomeComponent', async () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeService],
      imports: [HttpClientTestingModule]
    }).compileComponents()

    //create component and test fixture
    fixture = TestBed.createComponent(HomeComponent);

    //get test component from the fixture
    component = fixture.componentInstance

    //service provided to the TestBed
    service = TestBed.inject(HomeService);

    // fixture.detectChanges();

  })

  it('Should be created the component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInt', () => {
    const spy = spyOn(service, 'getDataHome').and.returnValue(of(myDataHome))
    component.ngOnInit();
    expect(component.dataHome.copyright).toBe('string')
    expect(spy).toHaveBeenCalled();
  });

  it('should in the table show the data', () => {
    const spy = spyOn(service, 'getDataHome').and.returnValue(of(myDataHome))
    component.ngOnInit();
    fixture.detectChanges();
    const compileDom = fixture.nativeElement
    expect(compileDom.querySelector('.sc_container h4').textContent).toContain('The new asteroid')
  });

});