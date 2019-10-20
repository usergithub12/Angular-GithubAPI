import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersListItemComponent } from './followers-list-item.component';

describe('FollowersListItemComponent', () => {
  let component: FollowersListItemComponent;
  let fixture: ComponentFixture<FollowersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
