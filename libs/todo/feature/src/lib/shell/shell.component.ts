import { Component } from '@angular/core';
import { PostService } from '@nx-ng-mfe/shared/data-access/services';

@Component({
  selector: 'nx-ng-mfe-todo-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  constructor(private posts: PostService) {
    this.posts.getPosts.subscribe((data) => console.log(data));
  }
}
