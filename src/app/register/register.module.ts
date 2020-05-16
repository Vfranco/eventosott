import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterDataComponent } from './register-data/register-data.component';

@NgModule({
	declarations: [RegisterDataComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [RegisterDataComponent]
})
export class RegisterModule { }
