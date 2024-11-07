import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aria-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aria-text.component.html',
  styleUrl: './aria-text.component.css'
})
export class AriaTextComponent {
   // Function to check if the aria-label matches the text content
   isError(ariaLabel: string, text: string): boolean {
    return ariaLabel === text;
  }
}
