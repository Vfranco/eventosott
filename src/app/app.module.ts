import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RegisterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
