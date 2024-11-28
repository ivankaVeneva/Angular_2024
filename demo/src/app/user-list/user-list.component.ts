import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    { name: `Pesho`, id: 1, age: 22},
    { name: `Ivan`, id: 2, age: 33},
    { name: `Mira`, id: 3, age: 12},
    { name: `Denis`, id: 4, age: 55},
    { name: `Kircho`, id: 5, age: 90},
  ];

}
