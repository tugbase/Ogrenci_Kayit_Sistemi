import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ogrenci } from '../Ogrenci';
import { OgrenciListService } from '../ogrenci-list.service';

@Component({
  selector: 'app-ogrenci-list',
  templateUrl: './ogrenci-list.component.html',
  styleUrls: ['./ogrenci-list.component.scss']
})
export class OgrenciListComponent implements OnInit {
  ogrenciList: Ogrenci[] = [];
  yeni = false;
  kolonNames = ['nameSurname', 'no', 'gender', 'birthDate', 'mail'];


  constructor(public ogrenciService: OgrenciListService, private route: ActivatedRoute, private router: Router) {

    

  }

  ngOnInit(): void {
    this.ogrenciService.showDefault();
    this.ogrenciList = this.ogrenciService.getListe();
    
  }
  

  ekle() {
    this.yeni = true;
  }

  kapat() {
    this.yeni = false;
  }

  onRowClick(ogrenci:Ogrenci){
    this.router.navigateByUrl('/details/'+ogrenci.no);

  }

}
