import { inject, Injectable } from '@angular/core';
import { MaterialsActions } from './materials.actions';
import { Folder, Folders } from '../model/materials.interface';
import { select, Store } from '@ngrx/store';
import { selectFolders } from './materials.selectors';

@Injectable({
  providedIn: 'root',
})
export class MaterialsFacade {
  private readonly store = inject(Store);
  public allFolders$ = this.store.pipe(select(selectFolders));

  createFolder(folder: Folder) {
    this.store.dispatch(MaterialsActions.createFolder({ folder }));
  }
  getAllFolders() {
    this.store.dispatch(MaterialsActions.loadFolders());
  }
  deleteFolder(id:number) {
    this.store.dispatch(MaterialsActions.deleteFolder({id}));
  }
}
 