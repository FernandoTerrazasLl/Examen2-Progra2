import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfazComponent } from './interfaz/interfaz.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterfazComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen2';
}
