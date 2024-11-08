import { inject, Injectable } from '@angular/core';
import { MaterialsActions } from './materials.actions';
import { Folder, Folders } from '../model/models.interface';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class MaterialsFacade {
  private readonly store = inject(Store);
  createFolder(folder: Folder) {
    this.store.dispatch(MaterialsActions.createFolder({ folder }));
  }
  
}
