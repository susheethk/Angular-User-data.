import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-pageone',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule, MatTableModule, MatPaginatorModule, FormsModule, MatCheckboxModule],
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'type', 'company','email','owner','source','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedElements: { [key: number]: boolean } = {}; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  barChartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['In Progress', 'Won', 'Disqualified']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [45, 60, 30], // Example data
      type: 'bar',
      itemStyle: {
        color: (params: any) => {
          const colors = ['#FBC02D', '#A1887F', '#90CAF9'];
          return colors[params.dataIndex];
        }
      }
    }]
  };

  pieChartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Leads',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 422, name: 'Referral' },
          { value: 369, name: 'Campaign' },
          { value: 244, name: 'Sales' },
          { value: 413, name: 'Events' },
          { value: 234, name: 'Website' },
        ],
      },
    ],
  };

  toggleAll(event: MatCheckboxChange) {
    const checked = event.checked;
    this.dataSource.data.forEach(element => {
      this.selectedElements[element.position] = checked;
    });
  }

toggleElement(element: PeriodicElement) {
  this.selectedElements[element.position] = !this.selectedElements[element.position];
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
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Completed',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Completed',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person',  company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Completed',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person', company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Completed',action: 'pending'},
  {position: 5000, name: 'Sathish', type: 'Person',  company: 'Likes',email: 'sathish@gmail.com',owner: 'Rahul',source: 'sachin@email.com',status: 'Completed',action: 'pending'},
];
