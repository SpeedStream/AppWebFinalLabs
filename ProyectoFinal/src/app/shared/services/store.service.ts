import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Store } from '../models/store';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { ToastrService } from './toastr.service';

@Injectable()
export class StoreService {
	selectedStore: Store = new Store();
	store: AngularFirestoreDocument<Store>;
	user: AngularFirestoreDocument<User>;

	constructor(
		private db: AngularFirestore,
		private toastrService: ToastrService,
		private authService: AuthService
	){
		this.store = new Store();
	}

	createStore(dataStore: Store){
		return this.db.collection('store').add(dataStore);
	}

	getStoreByUser(userMail: string): Store{

		console.log("storeService.getStoreByUser.userMail -> " + userMail);
		//this.store = new Store();
		var st = this.db.collection("store", ref =>
				ref.where("userId", "==", userMail))
			.snapshotChanges()
			.subscribe(data => {
				console.log("storeService.getStoreByUser.data -> ", data);
				
				data.forEach(element => {
					const theStore = element.payload.doc.data();
					this.store = theStore;
					console.log("store.storeId -> " + this.store.storeId);
				});
			})
			;

		return this.store;
	}

	userHasStore(): boolean{
		var userMail = this.authService.getLoggedInUser().emailId;

		console.log("storeService.userHasStore.userMail -> " + userMail);
		this.store = new Store();
		var st = this.db.collection("store", ref =>
				ref.where("userId", "==", userMail))
			.snapshotChanges()
			.subscribe(data => {
				console.log("storeService.userHasStore.data -> ", data);
				console.log("storeService.userHasStore.data.exitst -> ", data.length > 0);
				retVal = data.length > 0;
			});
		return retVal;
	}


	getStoreById(key: string) {
		return this.db.collection('store').doc(key);
	}
/*
	getIDStore(): string{
		const idStore = this.db.collection("store", ref =>
				ref.where("usrKey", "==", this.authService.getLoggedInUser())
			);
		console.log("storeService.getIDStore -> " + idStore);
		return idStore;
	}

	getIdStore(): string{
		this.store = db.collection('store').snapshotChanges().map(actions => {
			return actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return {id, ...data };
			});
		});
		return this.store;
	}
*/

}