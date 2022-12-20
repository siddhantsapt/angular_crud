import { Component, OnInit } from '@angular/core';
import {Routes, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Components
import { StudentListComponent } from '../student/list/student-list.component';
import { StudentAddComponent } from '../student/add/student-add.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {
	active: string;
	constructor(private router: Router, private toastr: ToastrService) {
		this.active = '';
		// Detect route changes for active sidebar menu
		this.router.events.subscribe((val) => {
			this.routeChanged(val);
		});
	}

	ngOnInit() {
	}

	// Detect route changes for active sidebar menu
	routeChanged(val: any) {
		this.active = val.url;
	}

	// Logout User
	logOut() {
		this.toastr.success('Success', "Logged Out Successfully");
		localStorage.removeItem('userData');
		this.router.navigate(['/login']);
	}
}


// Define and export child routes of HomeComponent
export const homeChildRoutes: Routes = [
	{
		path: '',
		component: StudentListComponent
	},
	{
		path: 'add',
		component: StudentAddComponent
	},
	{
		path: 'update/:id',
		component: StudentAddComponent
	},
];
