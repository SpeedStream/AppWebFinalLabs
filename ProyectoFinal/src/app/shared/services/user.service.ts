import { Injectable } from "@angular/core";
//import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import * as moment from "moment";
import { User } from "../models/user";

@Injectable()
export class UserService {

  selectedUser: User = new User();
  users: AngularFirestoreCollection<User>;

  location = {
    lat: null,
    lon: null
  };

  constructor(private db: AngularFirestore) {
    this.getUsers();
  }

  getUsers() {
  	this.users = this.db.collection('clients');
	
    return this.users;
  }

  createUser(data: any) {
    console.log("authService -> userService.createUser -> " + data.email);

    data.location = this.location;
    data.createdOn = moment(new Date()).format("X");
    data.isAdmin = false;
    //this.users.push(data);
    var anything = this.db.collection('clients').add(data);
    console.log("authService -> userService.createUser.anything -> " + anything)
    return anything;
  }

  isAdmin(emailId: string){
    return this.db.collection("clients", ref =>
      ref.where("email", "==", emailId));
  }

  setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  }
  
}
