import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesStagesComponent } from './liste-des-stages.component';

describe('ListeDesStagesComponent', () => {
  let component: ListeDesStagesComponent;
  let fixture: ComponentFixture<ListeDesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
