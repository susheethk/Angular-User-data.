import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pagetwo',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css'] // Corrected to styleUrls
})
export class PagetwoComponent implements AfterViewInit { // Updated to PagetwoComponent
  displayedColumns: string[] = ['position', 'name', 'type', 'company', 'email', 'owner'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  type: string;
  company: string;
  email: string;
  owner: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '#765434567', name: 'Call', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},
  { position: '#765434567', name: 'Email', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed' },
  { position: '#765434567', name: 'Call', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},
  { position: '#765434567', name: 'Email', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},
  { position: '#765434567', name: 'Call', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},
  { position: '#765434567', name: 'Call', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},
  { position: '#765434567', name: 'Call', type: 'Assigned a task by Henry Stark ', company: '23rd June 2024', email: 'Follw Up', owner: 'Completed'},

];
