import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: MenuItem[] = [];
  products: Product[] = [];

  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.http.get<Product[]>(`${this.app.url}/products`).subscribe({
      next: (value) => {
        this.products = value
      },
    })
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  deleteItem(id: string) {
    this.http.delete(`${this.app.url}/products/${id}`).subscribe({
      next: (value) => {
        this.getData()
      },
    })
  }

  goTo(id: string) {
    this.router.navigate([id])
  }
}


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  banner?: string;
  images: string[]
  rating?: number;
}