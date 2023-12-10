import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private courseService: CourseService, ) { }

  courses: any = [];

  ngOnInit(): void {



    
    this.courseService.getCourses().subscribe((res: any) => {
      
      this.courses = res;
    });
  }
}
