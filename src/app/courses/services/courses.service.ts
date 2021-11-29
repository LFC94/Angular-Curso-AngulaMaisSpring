import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: 1, nome: 'Angular', categoria: 'Js' },
      { _id: 2, nome: 'Laravel', categoria: 'PHP' },
    ];
  }
}
