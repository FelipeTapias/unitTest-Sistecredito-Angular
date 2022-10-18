import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { of } from 'rxjs';
import { dataHome } from './home-data.interface';

const myDataHome: dataHome = {
  copyright: 'string',
  date: new Date(),
  explanation: 'Could the stem of our Milky Way bloom into an auroral flower? No, not really, even though it may appear that way in today’s featured all-sky image.',
  hdurl: 'string',
  media_type: 'string',
  service_version: 'string',
  title: 'The new asteroid',
  url: 'https://apod.nasa.gov/apod/image/2210/GalaxyFlower_Strand_960.jpg'
}

const HomeServiceMock = {
  getDataHome: () => {
    return of(myDataHome)
  }
}

fdescribe('HomeComponent', async () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: HomeService, useValue: HomeServiceMock }],
      imports: [HttpClientTestingModule]
    }).compileComponents()

    //create component and test fixture
    fixture = TestBed.createComponent(HomeComponent);

    //get test component from the fixture
    component = fixture.componentInstance

    // fixture.detectChanges();

  })

  it('Should be created the component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInt', () => {
    const spy = spyOn(HomeServiceMock, 'getDataHome').and.returnValue(of(myDataHome))
    component.ngOnInit();
    expect(component.dataHome.copyright).toBe('string')
    expect(spy).toHaveBeenCalled();
  });

  it('should in the table show the data', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compileDom = fixture.nativeElement;
    expect(compileDom.querySelector('#sc_title').textContent).toContain('The new asteroid')
  });

});