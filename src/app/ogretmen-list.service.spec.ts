import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Ogretmen } from './Ogretmen';
import { OgretmenListService } from './ogretmen-list.service';

describe('OgretmenListService', () => {
  let service: OgretmenListService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
 

  beforeEach(() => {
    httpClientSpy=jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      providers:[
        OgretmenListService,
        {provide:HttpClient, useValue:httpClientSpy}
      ]
    });
    
    service = TestBed.inject(OgretmenListService);
    
  });
  it('should show first list', ()=>{
    const ogr=[{nameSurname:'asas', faculty:'asaa'}];
    httpClientSpy.get.and.returnValue(of(ogr));
    service.showIlk();
    expect(service.ogretmenListe[0].nameSurname).toBe(ogr[0].nameSurname);
    expect(service.ilk).toBe(false);
  });

  it('add ogretmen', () => {
    const orn=new Ogretmen('asta', 'thy');
    service.addTeacher(orn);
    expect(service.ogretmenListe[0]).toBe(orn);
    
  });

  it('return liste', () => {
    expect(service.getOgretmen()).toBe(service.ogretmenListe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
