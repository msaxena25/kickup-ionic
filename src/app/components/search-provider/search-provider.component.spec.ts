import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchProviderComponent } from './search-provider.component';

describe('SearchProviderComponent', () => {
  let component: SearchProviderComponent;
  let fixture: ComponentFixture<SearchProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProviderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
