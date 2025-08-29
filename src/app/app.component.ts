import { Component } from '@angular/core';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public products: any;

  constructor(serviceListProduct: ProductsService){
    serviceListProduct.listProducts().subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data;
      },
      error: (error: any) => {
        console.log(`El error, ${error}`);
      }
    });
  }

}

