import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
	selector: 'mfe-authenticator-login-layout',
	standalone: true,
	imports: [CommonModule, ButtonModule],
	templateUrl: './login.layout.html',
	styleUrl: './login.layout.scss',
})
export class LoginLayoutComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit() {}

	public async redirectToTools() {
		this.router.navigate(['/tools']);
	}
}
