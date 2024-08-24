import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { GeoLocation } from '../Types/GeoLocation';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
import { Weather } from '../Types/weatherCallback';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent implements OnInit {
  stata= 'clear-sky'
  title:string = ''
  descraiption:string = ''
  city = '';
  time = '';
  date: string = '';
  temp: number = 0;
  temp_max: number = 0;
  temp_min: number = 0;
  feels_like: number = 0;
  sunrise: string = '';
  sunset: string = '';
  timezone: string = '';
  humidity: number = 0;
  wind: { speed: number ; deg: number  } = { speed: 0, deg: 0 };
  rain: { '1h': number; }= { '1h': 0 };
  cloud = '/assets/images/cloud.png';
  windSpeed = '/assets/images/wind-speed.png';
  humidityIcon = '/assets/images/humidity.png';
  cloudIcon = '/assets/images/cloud-icon.png';
  sunSet = '/assets/images/sun-set.png';
  sunRise = '/assets/images/sun-rise.png';

  constructor(private weatherService: WeatherApiService) { }

  location: GeoLocation ;
  weather:Weather;

  getLocation=  async() =>  {
    window.navigator.geolocation.getCurrentPosition(async(position) => {
      this.location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      this.weatherService.getWeather(
        this.location.lat, this.location.lon
      ).subscribe((data:any) => {
        this.weather = data
        this.getDetails(data)
      })
    })
  }

  getDetails(data:any) {
    
    this.title = data.title
    this.descraiption = data.descraiption
    this.city = data.name
    this.time = dayjs(data.dt).format('HH:mm')
    this.date = dayjs(data.dt).format('dddd[,] Do [of] MMMM ')
    this.temp = data.main.temp
    this.temp_max = data.main.temp_max
    this.temp_min = data.main.temp_min
    this.feels_like = data.main.feels_like
    this.sunrise = dayjs(data.sys.sunrise* 1000).format('hh[:]mm')
    this.sunset = dayjs(data.sys.sunset* 1000).format('HH[:]mm')
    this.timezone = dayjs(data.timezone).format('Z')
    this.wind = {
      speed: data.wind.speed,
      deg: data.wind.deg
    }
    this.humidity = data.main.humidity
    this.rain = {
      '1h': data.rain['1h'] || 0
    }
    this.cloud = `/assets/images/${data.weather[0].icon}.png`
    this.stata = data.weather[0].icon
  }

  ngOnInit(): void {
    this.getLocation() 
  }
}
