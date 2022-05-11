import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenciListComponent } from './ogrenci-list.component';

describe('OgrenciListComponent', () => {
  let component: OgrenciListComponent;
  let fixture: ComponentFixture<OgrenciListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgrenciListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
