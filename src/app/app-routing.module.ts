import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AppComponent } from './app.component';

export const routes: Routes =  [
    { path: '**', component: AppComponent },
    { path: 'weather-app', component: WeatherCardComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }