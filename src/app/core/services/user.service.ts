import { Injectable, computed, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly usersState = signal<User[]>([
    {
      id: 1,
      name: 'Nadia Rahal',
      email: 'admin@smartdesk.dev',
      role: 'admin',
      department: 'IT Operations',
      avatar: 'NR',
      password: 'admin123'
    },
    {
      id: 2,
      name: 'Yacine Benali',
      email: 'agent@smartdesk.dev',
      role: 'agent',
      department: 'Support',
      avatar: 'YB',
      password: 'agent123'
    },
    {
      id: 3,
      name: 'Leila Mansouri',
      email: 'leila@smartdesk.dev',
      role: 'agent',
      department: 'Applications',
      avatar: 'LM',
      password: 'demo123'
    }
  ]);

  readonly users = computed(() => this.usersState());

  findById(userId: number): User | undefined {
    return this.usersState().find((user) => user.id === userId);
  }
}
