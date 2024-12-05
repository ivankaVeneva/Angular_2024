import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
  constructor(private apiservice: ApiService) {}

  addTheme(form: NgForm) {
    console.log(form);
    
    if(form.invalid) {
      return;
    }
    console.log(form.value);
    
  
    // console.log({ themeName, postText });
    // this.apiservice.createTheme(themeName, postText).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
