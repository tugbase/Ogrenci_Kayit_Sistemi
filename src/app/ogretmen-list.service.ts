import { Injectable } from '@angular/core';
import { Ogretmen } from './Ogretmen';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OgretmenListService {
  ilkUrl = 'assets/ogretmenlist.json';
  ilk = true;
  constructor(private servis: HttpClient) { }
  ogretmenListe: Ogretmen[] = [];

  getIlk() {
    return this.servis.get<Ogretmen[]>(this.ilkUrl);


  }

  showIlk() {
    if (this.ilk) {

      this.getIlk().subscribe(data => {

        for (const ogretmen of data) {

          this.ogretmenListe.push(new Ogretmen(ogretmen.nameSurname, ogretmen.faculty));
        }


      })
      this.ilk = false;
    }


  }


  addTeacher(teacher: Ogretmen) {
    this.ogretmenListe.push(teacher);

  }

  getOgretmen() {

    return this.ogretmenListe;
  }



}
