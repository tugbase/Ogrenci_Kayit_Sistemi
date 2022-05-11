import { Injectable } from '@angular/core';
import { Ogretmen } from './Ogretmen';
import { Course } from './Ders';

@Injectable({
  providedIn: 'root'
})
export class SinifListService {

  constructor() { }

sinifList : Course[]=[];

addSinif(sinif:Course){
this.sinifList.push(sinif);


}


getSinif(){

  return this.sinifList;
}


}
