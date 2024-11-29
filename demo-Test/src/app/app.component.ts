import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { beaverImgSrc, delsysImgSrc } from './constants';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    FooterComponent,
    UserListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
  numbers = [1, 2, 3, 4, 5];
  
  isShown = false;
  randomMsg = `random-red`;
  beaverImg = beaverImgSrc;
  delsysImg = delsysImgSrc;

 togleModal(event: Event): void {
  // console.log({ event});
  this.isShown = !this.isShown;
  this.randomMsg = this.isShown ? `random-green` : `random-red`;
 }
}
