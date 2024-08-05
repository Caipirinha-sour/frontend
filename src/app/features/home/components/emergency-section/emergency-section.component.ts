import { Component, inject } from '@angular/core';
import { EmergencyNumberService } from '../../services/emergency-number.service';
import { Observable } from 'rxjs';
import { EmergencyNumber } from '../../models/emergency-number';

@Component({
  selector: 'app-emergency-section',
  templateUrl: './emergency-section.component.html',
  styleUrl: './emergency-section.component.scss',
})
export class EmergencySectionComponent {
  private _emergencyService = inject(EmergencyNumberService);
  emergencyNumbers$: Observable<EmergencyNumber[]> =
    this._emergencyService.getAll();
}
