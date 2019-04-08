import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArtistsComponent } from './manage-artists.component';

describe('ManageArtistsComponent', () => {
  let component: ManageArtistsComponent;
  let fixture: ComponentFixture<ManageArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
