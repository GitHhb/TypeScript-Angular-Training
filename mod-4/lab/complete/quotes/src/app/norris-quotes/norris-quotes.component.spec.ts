import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrisQuotesComponent } from './norris-quotes.component';

describe('NorrisQuotesComponent', () => {
  let component: NorrisQuotesComponent;
  let fixture: ComponentFixture<NorrisQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorrisQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorrisQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
