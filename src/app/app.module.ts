import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AddogrenciComponent } from './addogrenci/addogrenci.component';
import { OgrenciListComponent } from './ogrenci-list/ogrenci-list.component';
import { RouterModule } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OgrenciDetailComponent } from './ogrenci-detail/ogrenci-detail.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeachListComponent } from './teach-list/teach-list.component';
import { AddClassComponent } from './add-class/add-class.component';

import { ListComponent } from './list/list.component';
import { SinifListComponent } from './sinif-list/sinif-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NumericDirective } from './numeric.directive';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    AddogrenciComponent,
    OgrenciListComponent,
    NaviComponent,
    MainpageComponent,
    OgrenciDetailComponent,
    AddTeacherComponent,
    TeachListComponent,
    AddClassComponent,
    SinifListComponent,
    ListComponent,
    NumericDirective,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent},
      
      {path:'list', component:OgrenciListComponent},
      {path:'details/:ogrencino', component:OgrenciDetailComponent},
      {path:'addTeacher', component:AddTeacherComponent},
      {path:'teachList', component:TeachListComponent},
      {path:'addLecture', component:AddClassComponent},
      {path:'lectureList', component:ClassComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
