import { Component, OnInit } from '@angular/core';
import { Course } from '../Ders';
import { SinifListService } from '../sinif-list.service';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classList:Course[]=[];
  constructor(private classListService:SinifListService) { }

  ngOnInit(): void {
    this.classList=this.classListService.getSinif();
  }



}
