import { createFeature, createReducer, on } from '@ngrx/store';
import { MaterialsActions } from './materials.actions';
import { Folders } from '../model/models.interface';

export interface State {
  folders: Folders[];
}

export const MATERIALS_FEATURE_KEY = 'materials';

export const materialsInitialState: Folders = {
  folders: [],
};

export const materialsFeature = createFeature({
  name: MATERIALS_FEATURE_KEY,
  reducer: createReducer(
    materialsInitialState,
    on(MaterialsActions.createFolder, (state, { folder }) => ({
      ...state,
      folders: [...state.folders, folder],
    }))
  ),
});
