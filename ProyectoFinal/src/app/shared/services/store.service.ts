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
	}

	createStore(dataStore: Store){
		return this.db.collection('store').add(dataStore);
	}

	
	userHasStore(userMail: string): any{

		//var store = this.db.collection("store");

		console.log("storeService.userHasStore.userMail -> " + userMail);

		var store = this.db.collection('store', ref =>
			ref.where('userId', '==', userMail))
			.snapshotChanges();

		console.log("userHasStore.storeId -> " + store.storeId);

		if(store != null){
			return true;
		}
		else{
			return false;
		}
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