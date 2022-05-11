import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Ogrenci } from './Ogrenci';

import { OgrenciListService } from './ogrenci-list.service';

describe('OgrenciListService', () => {
  let service: OgrenciListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({providers:[
      OgrenciListService,
      {provide:HttpClient, useValue:httpClientSpy}
    ]});
    service = TestBed.inject(OgrenciListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add ogrenci to list', () => {
    expect(service.ogrenciListe.length).toBe(0);
    const ogrenci=new Ogrenci('Ali Ayse', '12121', 'male', new Date(), 'asasasa');
    service.addOgrenci(ogrenci);
    expect(service.ogrenciListe[0]).toBe(ogrenci);
  });


  it('should return ogrenciList', () => {
    expect(service.getListe()).toBe(service.ogrenciListe);
  });


  it('should get default list', () => {
    const defa=[{nameSurname:'asas', no:'3434', gender:'female', birthDate:new Date(), mail:'sdad'}];
    httpClientSpy.get.and.returnValue(of(defa));
    service.showDefault();
    expect(service.ogrenciListe[0].nameSurname).toBe(defa[0].nameSurname);
    expect(service.bos).toBe(false);
  });




});
