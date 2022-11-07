import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesvideoComponent } from './listedesvideo.component';

describe('ListedesvideoComponent', () => {
  let component: ListedesvideoComponent;
  let fixture: ComponentFixture<ListedesvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
