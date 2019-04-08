import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsdetailComponent } from './artistsdetail.component';

describe('ArtistsdetailComponent', () => {
  let component: ArtistsdetailComponent;
  let fixture: ComponentFixture<ArtistsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
