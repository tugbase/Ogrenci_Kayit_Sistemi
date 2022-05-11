import { Component } from '@angular/core';
import { Ogrenci } from './Ogrenci';
import { OgrenciListService } from './ogrenci-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ogrenci';
  constructor(private ogrenciServis: OgrenciListService){


  }
olustur(){
  
}



  }

