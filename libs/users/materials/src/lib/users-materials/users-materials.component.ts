import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsAddButtonComponent } from '@feature-materials-create/feature-materials-create';

@Component({
  selector: 'users-users-materials',
  standalone: true,
  imports: [CommonModule, MaterialsAddButtonComponent],
  templateUrl: './users-materials.component.html',
  styleUrls: ['./users-materials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersMaterialsComponent {}
