import { Component, OnInit } from '@angular/core';
import { Course } from '../Ders';
import { Ogretmen } from '../Ogretmen';
import { OgretmenListService } from '../ogretmen-list.service';
import { SinifListService } from '../sinif-list.service';

@Component({
  selector: 'app-sinif-list',
  templateUrl: './sinif-list.component.html',
  styleUrls: ['./sinif-list.component.scss']
})
export class SinifListComponent implements OnInit {

  sinifList:Course[]=[];
  yeni=false;
  sutunlar=['code', 'lecturer', 'capacity'];

  constructor(private ogretmenServis:OgretmenListService, private sinifServis: SinifListService) { 
this.sinifList = sinifServis.getSinif();


  }

  ngOnInit(): void {
  }
ekle(){

  this.yeni=true;
}
kapat(){

  this.yeni=false;
}
}
