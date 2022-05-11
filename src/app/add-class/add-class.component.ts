import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../Ders';
import { Ogretmen } from '../Ogretmen';
import { SinifListService } from '../sinif-list.service';
import { Router, RouterModule } from '@angular/router';
import { OgrenciListService } from '../ogrenci-list.service';
import { OgretmenListService } from '../ogretmen-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { numeric } from '../numeric.directive';


@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

// code: string = '';
lecturerList :Ogretmen[]=[];
// capacity: number=0;
selectedLecturer:Ogretmen | undefined;
classForm!:FormGroup;
@Output() kapat=new EventEmitter();


  constructor(private sinifServis:SinifListService, private ogretmenServis:OgretmenListService, private router:Router, private fb:FormBuilder ) {

    
   }

  ngOnInit(): void {

    this.lecturerList = this.ogretmenServis.getOgretmen();
    this.classForm = this.fb.group({
      code:[''],
      lecturer:[''],
      capacity:['']
    });
  }

  get code(){return this.classForm.get('code')};
  get lecturer(){return this.classForm.get('lecturer')};
  get capacity(){return this.classForm.get('capacity')};

  kayit(){
   
const lecture = (this.classForm as FormGroup).value;
// const lecture = new Course(this.code, this.selectedLecturer as Ogretmen, this.capacity);
this.sinifServis.addSinif(lecture);
// this.router.navigateByUrl('lectureList');
this.kapat.emit();



  }

}
