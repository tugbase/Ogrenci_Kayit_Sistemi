import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { OgrenciListService } from '../ogrenci-list.service';
import { Ogretmen } from '../Ogretmen';
import { OgretmenListService } from '../ogretmen-list.service';
import { SinifListService } from '../sinif-list.service';

import { AddClassComponent } from './add-class.component';

describe('AddClassComponent', () => {
  let component: AddClassComponent;
  let fixture: ComponentFixture<AddClassComponent>;
  let sinifSpy: jasmine.SpyObj<SinifListService>;
  let ogrtSpy: jasmine.SpyObj<OgretmenListService>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    sinifSpy=jasmine.createSpyObj('SinifListService', ['addSinif']);
    ogrtSpy = jasmine.createSpyObj('OgretmenListService', ['getOgretmen']);
    await TestBed.configureTestingModule({
      declarations: [ AddClassComponent ],
      providers:[
        {provide:SinifListService, useValue:sinifSpy},
        {provide:OgretmenListService, useValue:ogrtSpy},
        {provide:Router, useValue:routerSpy},
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    const ogr=[{nameSurname:'asas', faculty:'asaa'}];
    ogrtSpy.getOgretmen.and.returnValue(ogr);
    fixture.detectChanges();
    expect(component.lecturerList).toBe(ogr);
    expect(component.classForm).toBeDefined();
  });

  it('should get code formControl', () => {
    fixture.detectChanges();
    expect(component.code).toBe(component.classForm.controls['code']);
    
  });

  it('should save sinif & emit event', () => {
    fixture.detectChanges();
    const a = {code:'2323', lecturer:new Ogretmen('asasa', 'sad'), capacity:343};
    component.classForm.setValue(a);
    let kapatworked=false;
    component.kapat.pipe(first()).subscribe(
      data => kapatworked=true
      );
    component.kayit();
    const cours = sinifSpy.addSinif.calls.first().args[0];
    expect(a).toEqual(cours);
    expect(kapatworked).toBe(true);
    
  });
});
