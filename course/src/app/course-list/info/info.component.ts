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
     this.retrieveById();
  }
  retrieveById():void{
    this.courseService.retrieveById(+this.router.snapshot.paramMap.get('id')).subscribe({
      next: courses =>{
        this.course = courses;
      },
      error: err => console.log('Erro!', err)
    })
  }

  save():void{
    this.courseService.save(this.course).subscribe({
      next:courses =>{
        this.course = courses;
      },
      error: err =>console.log('Erro!', err)
    })
  }

}
