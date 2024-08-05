import { Component, inject } from '@angular/core';
import { PostFormComponent } from '../post-form/post-form.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrl: './main-feed.component.scss',
})
export class MainFeedComponent {
  private _postService = inject(PostService);
  posts$: Observable<Post[]> = this._postService.getAll();

  modalService = inject(NgbModal);

  openFormPost(): void {
    const modalRef: NgbModalRef = this.modalService.open(PostFormComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.closed.subscribe((response) => {
      if (response) {
        this.posts$ = this._postService.getAll();
      }
    });
  }
}
