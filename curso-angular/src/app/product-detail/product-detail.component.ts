import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductById(Number(params['productId'])).subscribe(data => {
        this.product = data;
        this.color = this.product?.price as number > 100 ? 'red' : '';
        this.loading = false;
      })
    });
  }

}
