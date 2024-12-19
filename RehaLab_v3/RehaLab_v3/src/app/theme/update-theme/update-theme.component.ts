import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-theme.component.html',
  styleUrl: './update-theme.component.css'
})
export class UpdateThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  updateTheme(form: NgForm) {
    if(form.invalid) {
    return;
    }
    const { themeId, themeName, postText } = form.value;

    this.apiService.updateTheme(themeId, themeName, postText).subscribe(() => {
        this.router.navigate(['/theme']);
    });
  }
}
