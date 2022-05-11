import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OgretmenListService } from '../ogretmen-list.service';
import { Ogretmen } from '../Ogretmen';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {


  @Output() kapat = new EventEmitter();
  ogretmenForm!: FormGroup;

  constructor(public ogretmenServis: OgretmenListService, public router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.ogretmenForm = this.fb.group({
      nameSurname: ['', Validators.required],
      faculty: ['']
    });


  }
  get nameSurname() { return this.ogretmenForm.get('nameSurname')! };
  get faculty() { return this.ogretmenForm.get('faculty')! };

  occur() {
    const teach = this.ogretmenForm.value;
    this.ogretmenServis.addTeacher(teach);
    // this.router.navigateByUrl('teachList');
    this.kapat.emit();

  }

}
