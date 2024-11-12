import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Folder, Folders } from '../model/materials.interface';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    'Create Folder': props<{folder: Folder}>(),
    'Create Folders Success': props<{ folders: Folder[] }>(),
    'Create Folders Failure': props<{ error: unknown }>(),
    'Load Folders': emptyProps(),
    'Load Folders Success': props<{ folders: Folder[] }>(),
    'Load Folders Failure': props<{ error: unknown }>(),
    'Delete Folder': props<{ id: number }>(),
    'Delete Folder Success': props<{ folders: Folder[] }>(),
    'Delete Folder Failure': props<{ error: unknown }>(),


    updateFolders: props<{ folders: Folders[] }>(),
  
    


    'Load Materialss': emptyProps(),
    'Load Materialss Success': props<{ data: unknown }>(),
    'Load Materialss Failure': props<{ error: unknown }>(),
  },
});
