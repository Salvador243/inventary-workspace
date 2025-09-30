import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PRIMENG_IMPORTS from '@authenticator/presentation/provider/primeng.components';
import { Router } from '@angular/router';

@Component({
	selector: 'mfe-authenticator-login-layout',
	standalone: true,
	imports: [CommonModule, PRIMENG_IMPORTS, FormsModule],
	templateUrl: './login.layout.html',
	styleUrl: './login.layout.scss',
})
export class LoginLayoutComponent implements OnInit {
	constructor (private router?: Router) {}
	ngOnInit() {}
	public async redirectToTools() {
		this.router?.navigate(['/tools']);
	}
}
