import { Injectable } from '@angular/core';
import { Ogrenci } from './Ogrenci';
import { HttpClient } from '@angular/common/http';
import { OgrenciDefault } from './teach-list/DefaultOgrenci';





@Injectable({
  providedIn: 'root',
  
})
export class OgrenciListService {
  defaultUrl = 'assets/studentlist.json';
  ogrenciListe: Ogrenci[] = [];
  bos = true;
  constructor(private http: HttpClient) { }

  getDefault() {
    return this.http.get<OgrenciDefault[]>(this.defaultUrl);

  }

  showDefault() {
    if (this.bos) {
      this.getDefault().subscribe((data) => {

        for (const ogrenci of data) {

          this.ogrenciListe.push(new Ogrenci(ogrenci.nameSurname, ogrenci.no, ogrenci.gender, new Date(ogrenci.birthDate), ogrenci.mail))
        }

      });
      this.bos = false;
    }

  }



  addOgrenci(ogrenci: Ogrenci) {

    this.ogrenciListe.push(ogrenci);

  }
  getListe() {

    return this.ogrenciListe;
  }


}
