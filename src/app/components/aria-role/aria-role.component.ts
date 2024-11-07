import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aria-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aria-role.component.html',
  styleUrl: './aria-role.component.css'
})
export class AriaRoleComponent {
  title = 'ARIA Roles Visual Debugging Example';
}
