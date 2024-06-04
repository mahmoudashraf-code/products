import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../list/list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: string = ''
  productForm: FormGroup;
  images: string[] = []


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productForm = this.fb.group({
      code: ['f230fh0g3', Validators.required],
      name: ['Bamboo Watch', Validators.required],
      description: ['Product Description', Validators.required],
      banner: [undefined, Validators.required],
      price: [65, Validators.required],
      category: ['Accessories', Validators.required],
      quantity: [24, Validators.required],
      inventoryStatus: ['INSTOCK', Validators.required],
      rating: [5, Validators.required]
    });
    if (this.id != 'add') {
      this.getData()
    }
  }

  onbannerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.productForm.controls['banner'].setValue(reader.result)
      };
      reader.readAsDataURL(file);
    }
  }

  onImagesChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.images = [];
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();
        reader.onload = () => {
          this.images.push(reader.result as string)
        };
        reader.readAsDataURL(file);
      }
    }
  }

  getData() {
    this.http.get<Product>(`${this.app.url}/products/${this.id}`).subscribe({
      next: (value) => {
        this.productForm.setValue({
          code: value.code || '',
          name: value.name,
          description: value.description,
          banner: value.banner,
          price: value.price,
          category: value.category,
          quantity: value.quantity,
          inventoryStatus: value.inventoryStatus,
          rating: value.rating
        });
        this.images = value.images;
      },
    })
  }

  back() {
    this.router.navigate([''])
  }

  onSubmit() {
    if (this.productForm.valid) {
      let obj = {
        ...this.productForm.value
      };
      if (this.id != 'add') {
        obj['_id'] = this.id
      }
      obj.images = this.images;
      this.http.post(`${this.app.url}/products`, obj).subscribe({
        next: (value) => {
          this.router.navigate([''])
        },
      })
    }
  }
}
