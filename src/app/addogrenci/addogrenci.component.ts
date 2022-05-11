import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router } from '@angular/router';
import { Ogrenci } from '../Ogrenci';
import { OgrenciListService } from '../ogrenci-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addogrenci',
  templateUrl: './addogrenci.component.html',
  styleUrls: ['./addogrenci.component.scss']
})
export class AddogrenciComponent implements OnInit {

  @Output() kapat = new EventEmitter();
  ogrenciForm!: FormGroup; 
  
  

  constructor(public ogrenciService:OgrenciListService, private router:Router, private form:FormBuilder) {

    
   }

  ngOnInit(): void {

    this.ogrenciForm = this.form.group({
      nameSurname:['', Validators.required],
      no: ['', Validators.required],
      gender: [''],
      birthDate:[''],
      mail:['', [Validators.required, Validators.email]]
    });

   
    
  }

  get nameSurname(){return this.ogrenciForm.get('nameSurname')!};
  get no(){return this.ogrenciForm.get('no')!};
  get mail(){return this.ogrenciForm.get('mail')!};

  olustur() {
const ogrenci=(this.ogrenciForm as FormGroup).value;

this.ogrenciService.addOgrenci(ogrenci);
this.kapat.emit();

// new Ogrenci(this.ogrenciForm.value['nameSurname'], this.ogrenciForm.value['no'], this.ogrenciForm.value['gender'])


  }


}
