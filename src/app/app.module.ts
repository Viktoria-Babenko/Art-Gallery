// Данный модуль является входной точкой в приложение.
// С помощью директив import импортируется ряд необходимых модулей.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent }   from './data.component';
import {DataService} from './data.service';

// Функция-декоратор @NgModule ассоциирует метаданные с классом модуля AppModule.
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, DataComponent],
	providers: [DataService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }