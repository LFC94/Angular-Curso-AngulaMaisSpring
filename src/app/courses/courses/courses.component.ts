import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['nome', 'categoria'];

  constructor() {}

  ngOnInit(): void {
    // this.courses = [
    //   { _id: 1, nome: 'Angular', categoria: 'Js' },
    //   { _id: 2, nome: 'Laravel', categoria: 'PHP' },
    // ];
  }
}
