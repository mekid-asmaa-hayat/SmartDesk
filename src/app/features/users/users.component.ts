import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule, MatTableModule, TitleCasePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private readonly userService = inject(UserService);

  readonly displayedColumns = ['name', 'email', 'department', 'role'];
  readonly users = this.userService.users;
}
