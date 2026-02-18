import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../app.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {

  nombreProducto: string = '';
  precioProducto: number = 0;

  @Output() productCreated = new EventEmitter<Product>();

  agregar() {

    if (this.nombreProducto.trim() === '') {
      return;
    }

    if (this.precioProducto <= 0) {
      return;
    }

    const producto: Product = {

      id: 0,
      name: this.nombreProducto,
      price: this.precioProducto

    };

    this.productCreated.emit(producto);

    this.nombreProducto = '';
    this.precioProducto = 0;

  }

}
