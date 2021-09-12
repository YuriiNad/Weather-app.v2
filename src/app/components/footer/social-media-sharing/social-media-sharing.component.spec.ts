import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSharingComponent } from './social-media-sharing.component';

describe('SocialMediaSharingComponent', () => {
  let component: SocialMediaSharingComponent;
  let fixture: ComponentFixture<SocialMediaSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
