import { Component, EventEmitter, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OgrenciListService } from '../ogrenci-list.service';
import { OgretmenListService } from '../ogretmen-list.service';

import { TeachListComponent } from './teach-list.component';

@Component({selector: 'app-add-teache', template:'<button (click)="kapat.emit()" ></button>' })
class AddTeacherStubComponent {
  @Output() kapat=new EventEmitter();

}




describe('TeachListComponent', () => {
  let component: TeachListComponent;
  let fixture: ComponentFixture<TeachListComponent>;
  let ogretSerSpy : jasmine.SpyObj<OgretmenListService>;

  beforeEach(async () => {
    ogretSerSpy=jasmine.createSpyObj('OgretmenListService', ['showIlk', 'getOgretmen']);
    await TestBed.configureTestingModule({
      declarations: [ TeachListComponent, AddTeacherStubComponent ],
      providers:[{provide: OgretmenListService, useValue: ogretSerSpy}],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachListComponent);
    component = fixture.componentInstance;
    
  });

  it('should set OgretmenList', () => {
    const ogretmenList=[{nameSurname: 'Ali Ayse', faculty:'Orman'}];
    ogretSerSpy.getOgretmen.and.returnValue(ogretmenList);
    fixture.detectChanges();
    expect(component.ogretmenList).toBe(ogretmenList);
    expect(ogretSerSpy.showIlk.calls.count()).toBe(1);
  });

  it('should turn yeni to true', () => {
    fixture.detectChanges();
    component.ekle();
    expect(component.yeni).toBe(true);
  });

  it('should turn yeni to false', () => {
    fixture.detectChanges();
    component.yeni=true;
    component.kapat();
    expect(component.yeni).toBe(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
