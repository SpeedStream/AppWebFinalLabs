import { Component, OnInit } from '@angular/core';
import { Store } from '../../shared/models/store'
import { Routes } from '@angular/router';

import { CreateStoreComponent } from './new-store/new-store.component';

export const StoreRoutes: Routes = [
	{
		path: "",
		children: [
			{
				path: "create-store",
				component: CreateStoreComponent
			}
		]
	}
];