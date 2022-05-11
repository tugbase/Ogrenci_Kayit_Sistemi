import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { OgretmenListService } from '../ogretmen-list.service';

import { AddTeacherComponent } from './add-teacher.component';

describe('AddTeacherComponent', () => {
  let component: AddTeacherComponent;
  let fixture: ComponentFixture<AddTeacherComponent>;
  let ogrtSpy: jasmine.SpyObj<OgretmenListService>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    ogrtSpy=jasmine.createSpyObj('OgretmenListService', ['addTeacher']);
    await TestBed.configureTestingModule({
      declarations: [ AddTeacherComponent ],
      providers:[
        
        {provide: OgretmenListService, useValue: ogrtSpy},
        {provide: Router, useValue: routerSpy},
      
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherComponent);
    component = fixture.componentInstance;
   
  });

  it('should create form', () => {
    fixture.detectChanges();
    expect(component.ogretmenForm).toBeDefined();
  });

  it('should get nameSurname', () => {
    fixture.detectChanges();
    expect(component.nameSurname).toBe(component.ogretmenForm.controls['nameSurname']);
  });

  it('should save & emit', () => {
    fixture.detectChanges();
    const a = {nameSurname: 'Ali Ayse', faculty:'Orman'};
    component.ogretmenForm.setValue(a);
    let trut=false;
    component.kapat.pipe(first()).subscribe(
      data => trut=true
    );
    component.occur();
    const ilk = ogrtSpy.addTeacher.calls.first().args[0];
    expect(a).toEqual(ilk);
      expect(trut).toBe(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
