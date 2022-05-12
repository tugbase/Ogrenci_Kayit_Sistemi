import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../Ders';


@Component({
  selector: 'app-sinif-list',
  templateUrl: './sinif-list.component.html',
  styleUrls: ['./sinif-list.component.scss']
})
export class SinifListComponent implements OnInit {

   @Input() sinifList:Course[]=[];
  yeni=false;
  sutunlar=['code', 'lecturer', 'capacity'];

  constructor() { 

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
