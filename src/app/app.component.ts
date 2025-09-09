import { Component, inject } from '@angular/core';
import { ProductsService } from './services/products/products.service';
import { TechnologyService } from './services/technology/technology.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public products: any;
  public productsShow:any = false;

  public serviceListProductTecnology =  inject(TechnologyService);
  public serviceListProduct = inject(ProductsService);

  constructor(){
  }

  public genero = {
    "name": "Género",
    "filter": ['Hombre', 'Mujer', 'Niños', 'Niñas', 'Bebes', 'Unisex']
  };

  public marca = {
    "name": "Marca",
    "filter": ['thinkpad', 'dell', 'hp', 'asus', 'acer', 'apple', 'lenovo', 'msi', 'razer', 'samsung', 'lg', 'huawei']};

  public listFilter :any = this.genero;

  public getShowProducts(){
      this.serviceListProduct.listProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (error: any) => {
        console.log(`El error, ${error}`);
      }
    });
    this.listFilter = this.genero;
  }

  public getShowProductTechnology(){
    this.serviceListProductTecnology.listProductsTechnology().subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(data);
      },
      error: (error: any) => {
        console.log(`El error, ${error}`);
      }
    });
    this.listFilter = this.marca;
  }



}

