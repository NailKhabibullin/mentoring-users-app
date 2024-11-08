import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-material-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialCardComponent {
  
}
