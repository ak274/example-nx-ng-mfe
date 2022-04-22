import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts = this.http.get('https://reqres.in/api/users?page=2');
}
