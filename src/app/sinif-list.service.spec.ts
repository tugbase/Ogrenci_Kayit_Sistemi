import { TestBed } from '@angular/core/testing';
import { Course } from './Ders';
import { Ogretmen } from './Ogretmen';

import { SinifListService } from './sinif-list.service';

describe('SinifListService', () => {
  let service: SinifListService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[SinifListService]});
    service = TestBed.inject(SinifListService);
  });

  it('should add sinif', () => {
    const lec=new Course('1212', new Ogretmen('asasa', 'sad'), 34);
    service.addSinif(lec);
    expect(service.sinifList[0]).toBe(lec);
    
  });

  it('should return', () => {
    expect(service.getSinif()).toBe(service.sinifList);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
