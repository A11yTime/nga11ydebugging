import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AriaLabelComponent } from "./components/aria-label/aria-label.component";
import { AriaRoleComponent } from "./components/aria-role/aria-role.component";
import { AriaTextComponent } from "./components/aria-text/aria-text.component";
import { NativeRoleComponent } from "./components/native-role/native-role.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AriaLabelComponent, AriaRoleComponent, AriaTextComponent, NativeRoleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
