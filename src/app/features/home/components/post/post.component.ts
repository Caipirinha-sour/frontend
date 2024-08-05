import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input({ required: true }) post: Post | null = null;
}
