import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { FoldersListContainerStore } from './folders-list-container.store';
import { Folder } from '@users/materials/data-access';

@Component({
  selector: 'users-folders-list-container',
  standalone: true,
  imports: [
    CommonModule,
    FoldersListComponent
  ],
  templateUrl: './folders-list-container.component.html',
  styleUrls: ['./folders-list-container.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent {
  private readonly folderStore = inject(FoldersListContainerStore);
  public folders$ = this.folderStore.folders$;
  
  ngOnInit() {
    this.folders$.subscribe();
  }

  onDeleteFolder(id: number) {
    this.folderStore.deleteFolder(id);
    console.log(333, 'folders-list-container', id)
  }

}
