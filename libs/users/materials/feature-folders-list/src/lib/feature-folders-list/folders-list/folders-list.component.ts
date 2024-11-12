import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderCardComponent } from '../folder-card/folder-card.component';
import { Folder } from '@users/materials/data-access';

@Component({
  selector: 'users-folders-list',
  standalone: true,
  imports: [
    CommonModule,
    FolderCardComponent
  ],
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListComponent {
  @Input() folders: Folder[] | null = [];
  @Output() deleteFolder = new EventEmitter<number>();
  @Output() redirectToFolderPage = new EventEmitter<number>();

  onDeleteFolder(id: number) {
    this.deleteFolder.emit(id);
  }

  onRedirectToFolderPage(id: number) {
    this.redirectToFolderPage.emit(id)
  }
}
