import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient)
  {
  
  }
  GetStudentData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/41125ba7-3a99-11e9-9959-7d1915076b1c');
  }
  getWeatherData():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=3d6ffe666480282e3fb64a5b9336a79c');
  }
}
