import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Ogrenci } from '../Ogrenci';
import { OgrenciListService } from '../ogrenci-list.service';

import { AddogrenciComponent } from './addogrenci.component';

describe('AddogrenciComponent', () => {
  let component: AddogrenciComponent;
  let fixture: ComponentFixture<AddogrenciComponent>;
  let ogrSpy: jasmine.SpyObj<OgrenciListService>;
  let routerSpy= jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    ogrSpy=jasmine.createSpyObj('OgrenciListService',['addOgrenci']);
    await TestBed.configureTestingModule({
      declarations: [ AddogrenciComponent ],
      providers: [
        {provide:OgrenciListService, useValue: ogrSpy },
        {provide:Router, useValue: routerSpy},
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddogrenciComponent);
    component = fixture.componentInstance;
   
  });

  it('should create form', () => {
    fixture.detectChanges();
    expect(component.ogrenciForm).toBeDefined();
  });

  it('should return no', () => {
    fixture.detectChanges();
    expect(component.no).toBe(component.ogrenciForm.controls['no']);
  });

  it('should save & emit', () => {
    fixture.detectChanges();
    const b = {nameSurname:'Ali Ayse', no:'1212', gender:'female', birthDate: new Date(), mail:'asas' } as Ogrenci;
    component.ogrenciForm.setValue(b);
    let bol = false;
    component.kapat.pipe(first()).subscribe(
      data => bol=true
    );
    component.olustur();
    const c = ogrSpy.addOgrenci.calls.first().args[0];
    expect(b).toEqual(c);
    expect(bol).toBe(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
