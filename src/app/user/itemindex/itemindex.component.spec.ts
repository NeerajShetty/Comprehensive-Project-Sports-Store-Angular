import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemindexComponent } from './itemindex.component';

describe('ItemindexComponent', () => {
  let component: ItemindexComponent;
  let fixture: ComponentFixture<ItemindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
