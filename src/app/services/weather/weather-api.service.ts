import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { Weather } from '../../Types/weatherCallback';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }
  BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather?'
  data: any  = localStorage.getItem('weather');
  weather: Weather;

  getWeather(lat: number, lon: number) {
    if (this.data) {
      this.weather = JSON.parse(this.data);
      if(this.weather.location.lat === lat && this.weather.location.lon === lon){
        if(dayjs().diff(this.weather.dt, 's') < 3600) {
        return new Observable((observer) => {
            observer.next(this.weather);
            observer.complete();
        });
        }else{
          return this.getWeatherBylocation(lat, lon);
        }
      }else{
        return this.getWeatherBylocation(lat, lon);
      }
    } else {
      return this.getWeatherBylocation(lat, lon);
    }
  }

  getWeatherBylocation(lat : number, lon: number) {
    return this.http.get<Weather>(this.BASE_URL+`lat=${lat}&lon=${lon}&appid=${environment.apiKey}&units=metric`)
      .pipe(
        map((data: any) => {
          const weather: Weather = {
            location: { lat: lat, lon: lon },
            title: data.weather[0].main,
            descraiption: data.weather[0].description,
            icon:data.weather[0].icon,
            main: {
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              humidity: data.main.humidity
            },
            wind: {
              speed: data.wind.speed,
              deg: data.wind.deg
            },
            sys: {
              country: data.sys.country,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset
            },
            dt: dayjs.unix(dayjs().unix()).valueOf(),
            timezone: data.timezone,
            name: data.name
          };
          localStorage.setItem('weather', JSON.stringify(weather));
          return weather;
        })
      );
  }
}
