import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[1].description;

  price = 9.9987578587;

  rate = 0.67;

  course = COURSES[1];

  onCourseSelected(course: Course) {
    console.log("card-component - click event bubbled...", course)
  }

  // trackCourse(index:number, course:Course) {
  //   return course.id;
  // }

}
