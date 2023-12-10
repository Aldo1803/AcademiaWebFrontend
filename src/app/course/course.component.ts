import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  public courseId: any;
  public lessons: any = [];
  public course: any = {};
  public lesson: any = {};
  
  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router) { 
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }

  ngOnInit(): void {
    this.courseService.getCourse(this.courseId).subscribe((res: any) => {
      console.log(res);
      this.course = res;
      this.lessons = res.lessons;
    });
  }

   

}
