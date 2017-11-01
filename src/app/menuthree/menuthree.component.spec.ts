import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuthreeComponent } from './menuthree.component';

describe('MenuthreeComponent', () => {
  let component: MenuthreeComponent;
  let fixture: ComponentFixture<MenuthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
