import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Folder, Folders } from '../model/models.interface';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    createFolder: props<{folder: Folder}>(),
    updateFoldersSuccess: props<{ folders: Folder[] }>(),
    updateFoldersFailure: props<{ error: any }>(),



    updateFolders: props<{ folders: Folders[] }>(),
  
    


    'Load Materialss': emptyProps(),
    'Load Materialss Success': props<{ data: unknown }>(),
    'Load Materialss Failure': props<{ error: unknown }>(),
  },
});
