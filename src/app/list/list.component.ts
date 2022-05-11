import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() columnNames: string[] = [];
  @Input() dataList: any[] = [];
  @Output() rowClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(data:any) {

    this.rowClick.emit(data);
  }


}
