import { Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  students:any = [];
  weathers:any = [];
  constructor(private dataService:DataService)
  {

  }
  ngOnInit()
  {
    this.dataService.GetStudentData().subscribe((data)=>{
        this.students = data.students;
      }
    );
    this.dataService.getWeatherData().subscribe((data)=>{
      this.weathers = data.weather;
    }
  );
  }

}
