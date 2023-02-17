import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPersonnesComponent } from './liste-des-personnes.component';

describe('ListeDesStagesComponent', () => {
  let component: ListeDesPersonnesComponent;
  let fixture: ComponentFixture<ListeDesPersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesPersonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
