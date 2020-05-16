import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuarios } from 'src/app/models/interface.usuarios';

@Component({
	selector: 'app-register-data',
	templateUrl: './register-data.component.html',
	styleUrls: ['./register-data.component.css']
})
export class RegisterDataComponent implements OnInit {

	formUsuarios: Usuarios = new Usuarios();

	constructor() { }

	ngOnInit() {
		
	}

	saveDataUser(frmUsuarios: Usuarios){
		console.log(frmUsuarios);
	}

}
