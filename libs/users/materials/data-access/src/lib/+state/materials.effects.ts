import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { MaterialsActions } from './materials.actions';
import { ApiService } from '@users/core/http';
import { Folder, Folders } from '../model/models.interface';

@Injectable()
export class MaterialsEffects {

  createFolder$ = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.createFolder),
      switchMap((action) => 
        apiService.post<void, { folder: Folder }>('/folder', { folder: action.folder }).pipe(
          map(() => MaterialsActions.updateFoldersSuccess({ folders: [action.folder] })),
          catchError((error) => of(MaterialsActions.updateFoldersFailure({ error })))
        )
      )
    );
  });

  


  
  loadMaterialss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MaterialsActions.loadMaterialss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => MaterialsActions.loadMaterialssSuccess({ data })),
          catchError((error) => of(MaterialsActions.loadMaterialssFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
