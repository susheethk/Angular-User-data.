import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pageone',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'type', 'company','email','owner','source','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  type: string;
  company: string;
  email: string;
  owner: string;
  source: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Done',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Done',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person',  company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Done',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Done',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person',  company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Done',action: 'pending'},
];
