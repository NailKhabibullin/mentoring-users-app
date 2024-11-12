import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { MaterialsActions } from './materials.actions';
import { ApiService } from '@users/core/http';
import { Folder, Folders } from '../model/materials.interface';
import { Store } from '@ngrx/store';
import { error } from 'highcharts';

@Injectable()
export class MaterialsEffects {
  createFolder$ = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(MaterialsActions.createFolder),
      switchMap((action) => 
        apiService.post<void, Folder>('/folder', action.folder).pipe(
          map(() => MaterialsActions.createFoldersSuccess({ folders: [action.folder] })),
          catchError((error) => of(MaterialsActions.createFoldersFailure({ error })))
        )
      )
    );
  },
  { functional: true }
  );
  loadMaterials$ = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(MaterialsActions.loadFolders),
      switchMap(() =>
        apiService.get<Folder[]>('/folder').pipe(
          map((res) => MaterialsActions.loadFoldersSuccess({ folders: res })),
          catchError((error) => of(MaterialsActions.loadFoldersFailure({ error })))
        )
      )
    );
  },
  { functional: true }
  );
  deleteFolder$ = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(MaterialsActions.deleteFolder),
      switchMap(({ id }) => 
        apiService.delete<Folder[]>(`/folder/${id}`).pipe(
          map((res) => MaterialsActions.deleteFolderSuccess({ folders: res })),
          catchError((error) => {
            return of(MaterialsActions.deleteFolderFailure({ error }));
          })
      ))
    )
  },
  { functional: true }
  );
}
