import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productList: any
  categoryList: any
  searchItem: any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct()
      .subscribe((data) => {
        this.productList = data


      })
    this.productService.search.subscribe((term) => {
      this.searchItem = term
    })

  }
  categorySearch(category: any) {
    this.categoryList = this.productList.filter((item: any) => {
      if (category == '' || category == item.categoryId) {
        return item
      }
    })
  }

}
