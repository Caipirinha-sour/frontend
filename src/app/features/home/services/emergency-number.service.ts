import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmergencyNumber } from '../models/emergency-number';
import { EMERGENCY_NUMBER } from '../data/emergency-numbers';

@Injectable({
  providedIn: 'root',
})
export class EmergencyNumberService {
  getAll(): Observable<EmergencyNumber[]> {
    return of<EmergencyNumber[]>(EMERGENCY_NUMBER);
  }
}
