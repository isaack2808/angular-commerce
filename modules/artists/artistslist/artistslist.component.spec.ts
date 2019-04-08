import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistslistComponent } from './artistslist.component';

describe('ArtistslistComponent', () => {
  let component: ArtistslistComponent;
  let fixture: ComponentFixture<ArtistslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
