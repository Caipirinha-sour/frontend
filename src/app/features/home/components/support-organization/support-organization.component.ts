import { Component, inject } from '@angular/core';
import { Organization } from '../../models/organization';
import { Observable } from 'rxjs';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-support-organization',
  templateUrl: './support-organization.component.html',
  styleUrl: './support-organization.component.scss',
})
export class SupportOrganizationComponent {
  private _supportService = inject(OrganizationService);
  supportOrganizations$: Observable<Organization[]> =
    this._supportService.getAll();
}
