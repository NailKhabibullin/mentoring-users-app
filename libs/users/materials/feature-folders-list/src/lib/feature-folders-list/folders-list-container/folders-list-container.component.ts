import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { FoldersListContainerStore } from './folders-list-container.store';
import { Folder } from '@users/materials/data-access';
import { Router } from '@angular/router';

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
  private readonly router = inject(Router);
  public folders$ = this.folderStore.folders$;
  
  ngOnInit() {
    this.folders$.subscribe();
  }

  onDeleteFolder(id: number) {
    this.folderStore.deleteFolder(id);
  }

  onRedirectToFolderPage(id: number) {
    this.router.navigate(['/materials', id], {
    });
  }

  
}
