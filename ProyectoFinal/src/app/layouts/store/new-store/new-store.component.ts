import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { StoreService } from 'src/app/shared/services/store.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Store } from 'src/app/shared/models/store';
import { User } from 'src/app/shared/models/user';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
	selector: 'new-store',
	templateUrl: './new-store.component.html',
	styleUrls: [ './new-store.component.scss' ]
})
export class CreateStoreComponent implements OnInit {
	store: Store = new Store();

	constructor(
		private storeService: StoreService,
		private authService: AuthService,
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() {
		console.log("userHasStore -> " + this.storeService.userHasStore(this.authService.getLoggedInUser().emailId));
	}

	createStore(storeForm: NgForm){
		storeForm.value['storeId']= 'STORE_' + shortId.generate();
		storeForm.value['userId']= this.authService.getLoggedInUser().emailId;

		storeForm.value['keyFile']= '0';
		storeForm.value['certFile']= '0';
		storeForm.value['storeImageUrl']= '0';
		storeForm.value['fechaCreacion']= moment().unix();

		this.storeService.createStore(storeForm.value)

		this.store = new Store();

		toastr.success('store' + storeForm.value['storeName'] + ' was created', 'StoreCreation');

		this.router.navigate(["/store/create-store"]);
	}

}