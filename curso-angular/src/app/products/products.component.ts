import { Component, OnInit } from '@angular/core';
import { productsList } from './products.mock';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.models';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productsList: IProduct[] = [];

  constructor (private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
    });
  } 

}
