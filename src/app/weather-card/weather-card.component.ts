import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  stata= 'clear-sky'
  cloud = '/assets/images/cloud.png';
  windSpeed = '/assets/images/wind-speed.png';
  humidity = '/assets/images/humidity.png';
  cloudIcon = '/assets/images/cloud-icon.png';
  sunSet = '/assets/images/sun-set.png';
  sunRise = '/assets/images/sun-rise.png';
}
