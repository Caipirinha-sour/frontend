import { Component, inject } from '@angular/core';
import { TagService } from '../../../../shared/services/tag.service';
import { Observable } from 'rxjs';
import { Tag } from '../../../../shared/models/tag';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { PostReq } from '../../models/post-req';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent {
  private _tagService = inject(TagService);
  private _postService = inject(PostService);
  private _formBuilder = inject(FormBuilder);
  private _toastr = inject(ToastrService);

  tags$: Observable<Tag[]> = this._tagService.getAll();

  activeModal = inject(NgbActiveModal);

  form = this._formBuilder.group({
    text: new FormControl<string>('', Validators.required),
    mediaUrl: new FormControl<string>(''),
    tagId: new FormControl<number | null>(null, Validators.required),
    citizenId: new FormControl<number | null>(1),
  });

  onSave(): void {
    this._postService.create(this.form.getRawValue() as PostReq).subscribe({
      next: () => {
        this._toastr.success('Post created successfully');
        this.activeModal.close(true);
      },
      error: (error) => this._toastr.error(error.error.message),
    });
  }
}
