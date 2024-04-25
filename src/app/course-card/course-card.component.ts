import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COURSES} from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({required: true})
  course:Course;

  @Input({required:true})
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  onCourseViewed() {
    console.log("card component - button clicked ...")

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
