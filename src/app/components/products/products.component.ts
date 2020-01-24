import { APIService } from './../../services/API.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private apiService:APIService) { }

  ngOnInit() {
  }

}
