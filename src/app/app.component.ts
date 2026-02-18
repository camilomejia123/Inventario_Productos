import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductFormComponent,
    ProductListComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  productos: Product[] = [];

  contadorId = 1;

  // agregar producto
  agregarProducto(product: Product) {

    const nuevoProducto: Product = {
      id: this.contadorId,
      name: product.name,
      price: product.price
    };

    this.productos.push(nuevoProducto);

    this.contadorId++;
  }

  // eliminar producto
  eliminarProducto(id: number) {

    this.productos = this.productos.filter(p => p.id !== id);

  }

  // total dinero
  calcularTotal(): number {

    let total = 0;

    for (let producto of this.productos) {

      total = total + producto.price;

    }

    return total;
  }

}
