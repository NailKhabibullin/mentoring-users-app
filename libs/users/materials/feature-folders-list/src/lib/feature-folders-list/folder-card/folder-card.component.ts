import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-folder-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderCardComponent {}
