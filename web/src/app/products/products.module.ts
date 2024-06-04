import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
      }
    ])
  ]
})
export class ProductsModule { }
