import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app-routing.module";
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HttpClientModule } from "@angular/common/http";
import { Temperature } from "./Pipes/Temperature.pipe";
import { Diraction } from "./Pipes/Diraction.pipe";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
    declarations: [
        AppComponent,
        WeatherCardComponent,
        Temperature,
        Diraction
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxSkeletonLoaderModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }