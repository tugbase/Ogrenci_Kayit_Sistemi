import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let rowEl:HTMLElement;
  let cellEl:HTMLElement;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    
    rowEl=fixture.nativeElement.querySelector('.c');
    
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should emit selected', () => {
    rowEl.click();
    fixture.detectChanges();
    expect(testHost.selected).toBe(testHost.datas[0]);
  });

});

@Component({
  template: `
    <app-list
      [columnNames]="columns" [dataList]="datas" (rowClick)="onSelected($event)">
    </app-list>`
})
class TestHostComponent {
  colums = ['name', 'age'];
  datas = [{name:'Ali', age:32}];

  selected: any;
  onSelected(data:any) {
    this.selected = data;
  }



}