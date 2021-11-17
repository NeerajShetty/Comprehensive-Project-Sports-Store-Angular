import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdeleteComponent } from './itemdelete.component';

describe('ItemdeleteComponent', () => {
  let component: ItemdeleteComponent;
  let fixture: ComponentFixture<ItemdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
