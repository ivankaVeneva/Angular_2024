import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
