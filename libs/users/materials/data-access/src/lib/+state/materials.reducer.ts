import { createFeature, createReducer, on } from '@ngrx/store';
import { MaterialsActions } from './materials.actions';
import { Folder } from '../model/materials.interface';

export interface State {
  folders: Folder[];
}
export const MATERIALS_FEATURE_KEY = 'materials';
export const materialsInitialState: State = {
  folders: [],
};

export const materialsFeature = createFeature({
  name: MATERIALS_FEATURE_KEY,
  reducer: createReducer(
    materialsInitialState,
    on(MaterialsActions.createFolder, (state, { folder }) => ({
      ...state,
      folders: [...state.folders, folder],
    })),
    on(MaterialsActions.loadFoldersSuccess, (state, { folders }) => ({
      ...state,
      folders,
    })), 
    on(MaterialsActions.loadFoldersFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(MaterialsActions.deleteFolder, (state, { id }) => ({
      ...state,
      folders: state.folders.filter(folder => folder.id!== id)
    })),
  ),
});
