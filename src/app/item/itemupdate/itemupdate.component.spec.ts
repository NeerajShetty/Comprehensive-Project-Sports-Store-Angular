import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemupdateComponent } from './itemupdate.component';

describe('ItemupdateComponent', () => {
  let component: ItemupdateComponent;
  let fixture: ComponentFixture<ItemupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
