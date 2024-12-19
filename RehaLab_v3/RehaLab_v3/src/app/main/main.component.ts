import { Component } from '@angular/core';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { ThemesListComponent } from '..//theme/themes-list/themes-list.component';
import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';
import { AddThemeComponent } from '../theme/add-theme/add-theme.component';
import { AuthenticateComponent } from "../authenticate/authenticate.component";
import { CurrentThemeComponent } from "../theme/current-theme/current-theme.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, ThemesListComponent, PostsListComponent, AddThemeComponent, AuthenticateComponent, CurrentThemeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  

  constructor(private userService: UserService) {}

}
