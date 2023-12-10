import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent implements OnInit{
  public lessonId: any;
  public lesson: any = {};
  constructor(private courseService: CourseService, public route: ActivatedRoute) { }

  ngOnInit(): void {
      
    this.route.params.subscribe(params => {
      this.lessonId = params['id'];
    });
    this.courseService.getLesson(this.lessonId).subscribe((res: any) => {
      console.log(res);
      this.lesson = res;
    });

  }

}
