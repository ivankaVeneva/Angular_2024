import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { FormsModule } from '@angular/forms';
import { Post } from '../../types/post';
import { User } from '../../types/user';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [HomeComponent, FormsModule],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css',
})
export class CurrentThemeComponent implements OnInit {
  // theme: Theme | null = null;  или casting - theme = object as Theme
  theme = {} as Theme;
 // newComment: string = ''; 
  //comment!: Post;
  newComment: any;
 


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
    });
  }

  addComment(): void {
    if (!this.newComment.trim()) {
      return; 
    }

    const id = this.route.snapshot.params['themeId'];

    this.apiService.addComment(id, this.newComment).subscribe((comment) => {      
      this.theme.posts.push(this.newComment);
      this.newComment = ''; 
    });
  }
}