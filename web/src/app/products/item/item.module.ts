import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    GalleriaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    RatingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemComponent
      }
    ])
  ]
})
export class ItemModule { }
