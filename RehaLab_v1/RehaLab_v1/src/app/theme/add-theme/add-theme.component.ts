import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
  constructor(private apiservice: ApiService, private router: Router) {}

  addTheme(form: NgForm) {
    //console.log(form);
    
    if(form.invalid) {
      return;
    }
    const { themeName, postText } = form.value;

    this.apiservice.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    // console.log(data);
    // console.log(form.value);     
    // console.log({ themeName, postText });
    });
  }
}
