import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Folder } from '@users/materials/data-access';
import { MaterialsFacade } from '@users/materials/data-access';
import { MaterialsAddDialogComponent } from '@feature-materials-create/feature-materials-create';

@Component({
  selector: 'users-folders-add-dialog',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './folders-add-dialog.component.html',
  styleUrls: ['./folders-add-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersAddDailogComponent {
  readonly dialogRef = inject(MatDialogRef<MaterialsAddDialogComponent>);
  private readonly materialsFacade = inject(MaterialsFacade);

  folder: Folder = {
    id: 0,
    title: '',
    created_at: Date.now(),
};

  onCreateFolder(): void {
    this.materialsFacade.createFolder(this.folder);
    this.dialogRef.close()
  }
  onEscape(): void {
    this.dialogRef.close();
  }
}
