import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
course: Course;
  constructor(private router:ActivatedRoute, private courseService:CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+this.router.snapshot.paramMap.get('id'));
  }
  save():void{
    this.courseService.save(this.course);
  }

}
