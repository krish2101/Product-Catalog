import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateratecardComponent } from './createratecard.component';

describe('CreateratecardComponent', () => {
  let component: CreateratecardComponent;
  let fixture: ComponentFixture<CreateratecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateratecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateratecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
