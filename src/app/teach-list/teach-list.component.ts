import { Component, OnInit } from '@angular/core';
import { OgretmenListService } from '../ogretmen-list.service';
import { Ogretmen } from '../Ogretmen';

@Component({
  selector: 'app-teach-list',
  templateUrl: './teach-list.component.html',
  styleUrls: ['./teach-list.component.scss']
})
export class TeachListComponent implements OnInit {

  ogretmenList: Ogretmen[] = [];
  yeni = false;
  kolonlar = ['nameSurname', 'faculty'];
  constructor(public ogretmenServis: OgretmenListService) {



  }

  ngOnInit(): void {
    this.ogretmenServis.showIlk();

    this.ogretmenList = this.ogretmenServis.getOgretmen();
  }
  ekle() {

    this.yeni = true;
  }

  kapat() {
    this.yeni = false;
  }
}
