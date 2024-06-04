import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent
      }
    ])
  ]
})
export class ListModule { }
