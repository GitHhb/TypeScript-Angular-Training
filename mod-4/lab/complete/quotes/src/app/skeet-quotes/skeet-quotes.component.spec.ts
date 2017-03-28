import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeetQuotesComponent } from './skeet-quotes.component';

describe('SkeetQuotesComponent', () => {
  let component: SkeetQuotesComponent;
  let fixture: ComponentFixture<SkeetQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeetQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeetQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
