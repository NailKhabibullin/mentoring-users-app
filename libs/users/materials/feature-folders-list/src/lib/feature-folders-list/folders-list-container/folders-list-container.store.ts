import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Folder, Folders, MaterialsFacade, selectFolders } from '@users/materials/data-access';
import { map, tap } from 'rxjs';

type FoldersListState = {
  folders: Folder[];
};

const initialState: FoldersListState = {
  folders: [],
};

@Injectable({
  providedIn: 'root'
})
export class FoldersListContainerStore extends ComponentStore<FoldersListState> {
  private readonly materialsFacade = inject(MaterialsFacade);
  readonly folders$ = this.materialsFacade.allFolders$.pipe(
    map((foldersArray: Folder[]) => foldersArray)
  );

  constructor() {
    super(initialState);
    this.loadFolders();
  }

  loadFolders() {
    this.materialsFacade.getAllFolders();
  }

  deleteFolder(id: number) {
    console.log(444, "folders-list-container.store", id);
    this.materialsFacade.deleteFolder(id)
  }


}

//   // Метод для добавления папки
//   readonly addFolder = this.effect<Folder>((folder$) =>
//     folder$.pipe(
//       tap((folder) => {
//         this.patchState((state) => ({
//           folders: [...state.folders, folder],
//         }));
//       })
//     )
//   );

//   // Метод для удаления папки
//   readonly deleteFolder = this.effect<number>((folderId$) =>
//     folderId$.pipe(
//       tap((folderId) => {
//         this.patchState((state) => ({
//           folders: state.folders.filter((folder) => folder.id !== folderId),
//         }));
//       })
//     )
//   );

