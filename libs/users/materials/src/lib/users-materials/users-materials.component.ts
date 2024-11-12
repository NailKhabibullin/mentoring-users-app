import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoldersAddButtonComponent } from '@feature-folders-create/feature-folders-create';
import { FoldersListContainerComponent } from '@feature-folders-list/feature-folders-list';
@Component({
  selector: 'users-users-materials',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FoldersAddButtonComponent,
    FoldersListContainerComponent
  ],
  templateUrl: './users-materials.component.html',
  styleUrls: ['./users-materials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersMaterialsComponent {}
