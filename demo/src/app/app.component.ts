import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavigationBarComponent, FooterComponent, UserListComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  })
export class AppComponent {
  title = 'demo';

  numbers = [1, 2, 3, 4, 5];
}
