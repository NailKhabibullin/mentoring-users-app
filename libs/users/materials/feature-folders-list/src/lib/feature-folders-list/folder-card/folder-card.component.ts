import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { Folder } from '@users/materials/data-access';

@Component({
  selector: 'users-folder-card',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderCardComponent {
  @Input() folder!: Folder;
  @Output() deleteFolder = new EventEmitter<number>();
  @Output() redirectToFolderPage = new EventEmitter<number>();

  onDeleteFolder() {
    this.deleteFolder.emit(this.folder.id)
  }

  onRedirectToFolderPage() {
    this.redirectToFolderPage.emit(this.folder.id)
  }
}
