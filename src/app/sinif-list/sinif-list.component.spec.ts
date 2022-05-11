import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinifListComponent } from './sinif-list.component';

describe('SinifListComponent', () => {
  let component: SinifListComponent;
  let fixture: ComponentFixture<SinifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinifListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
