import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { RegisterDataComponent } from './register-data/register-data.component';

@NgModule({
	declarations: [RegisterDataComponent],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule
	],
	exports: [RegisterDataComponent]
})
export class RegisterModule { }
