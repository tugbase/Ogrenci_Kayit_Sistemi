import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OgrenciListService } from '../ogrenci-list.service';

import { OgrenciDetailComponent } from './ogrenci-detail.component';

describe('OgrenciDetailComponent', () => {
  let component: OgrenciDetailComponent;
  let fixture: ComponentFixture<OgrenciDetailComponent>;
  let ogrenciSpy: jasmine.SpyObj<OgrenciListService>;
  let paramap= new Map<string,string>();
  paramap.set('ogrencino', '3434');
  let router = {
    snapshot :{
      paramMap: paramap
    }
  };

  beforeEach(async () => {
    ogrenciSpy=jasmine.createSpyObj('OgrenciListService', ['getListe']);
    await TestBed.configureTestingModule({
      declarations: [ OgrenciDetailComponent ],
      providers: [
        {provide: OgrenciListService, useValue: ogrenciSpy},
        {provide: ActivatedRoute, useValue: router}

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenciDetailComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected student', () => {
    const ogrenci=[{nameSurname:'asas', no:'3434', gender:'female', birthDate:new Date(), mail:'sdad'}];
    ogrenciSpy.getListe.and.returnValue(ogrenci);
    fixture.detectChanges();
    expect(component.student).toBe(ogrenci[0]);
  });
});
