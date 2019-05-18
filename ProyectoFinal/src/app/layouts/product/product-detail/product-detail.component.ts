import { Product } from '../../../shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	private sub: any;
	product: Product;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private toastrService: ToastrService
	) {
		this.product = new Product();
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			const id = params['id'];
			this.getProductDetail(id);
		});
	}

	getProductDetail(id: string) {
		const x = this.productService.getProductById(id);
		console.log("id " + id);
		x.snapshotChanges().subscribe(
			(product) => {
				console.log("product" + product)
				this.product = product.payload.data();
			},
			(error) => {
				this.toastrService.error('Error while fetching Product Detail', error);
			}
		);
	}

	addToCart(product: Product) {
		this.productService.addToCart(product);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
