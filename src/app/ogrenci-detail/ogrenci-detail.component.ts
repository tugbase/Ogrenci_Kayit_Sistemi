import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Ogrenci } from '../Ogrenci';
import { OgrenciListService } from '../ogrenci-list.service';

@Component({
  selector: 'app-ogrenci-detail',
  templateUrl: './ogrenci-detail.component.html',
  styleUrls: ['./ogrenci-detail.component.scss']
})
export class OgrenciDetailComponent implements OnInit {



  student:Ogrenci={
    nameSurname: '',
    no: '',
    gender: '',
    birthDate: new Date(),
    mail: ''
  }

  constructor(private route:ActivatedRoute, private ogrenciServis: OgrenciListService) {



   }



  ngOnInit(): void {
    // this.route.paramMap.subscribe(params=>{
    //   this.student=this.ogrenciServis.ogrenciListe.find(el=>el.no===params.get('ogrencino')) as Ogrenci;
    // });
     const routeParams = this.route.snapshot.paramMap;
    const ogrencinoFromRoute =routeParams.get('ogrencino');
    this.student = this.ogrenciServis.getListe().find(el => el.no === ogrencinoFromRoute) as Ogrenci;

    
  }

}
