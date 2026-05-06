import { Injectable, computed, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly usersState = signal<User[]>([
    {
      id: 1,
      name: 'Mekid Asma Hayet',
      email: 'admin@smartdesk.dev',
      role: 'admin',
      department: 'IT Operations',
      avatar: 'MA',
      password: 'admin123'
    },
    {
      id: 2,
      name: 'Antoine Chevalier',
      email: 'agent@smartdesk.dev',
      role: 'agent',
      department: 'Support',
      avatar: 'AC',
      password: 'agent123'
    },
    {
      id: 3,
      name: 'Sophie Renault',
      email: 'Sophie Renault@smartdesk.dev',
      role: 'agent',
      department: 'Applications',
      avatar: 'SR',
      password: 'demo123'
    }
  ]);

  readonly users = computed(() => this.usersState());

  findById(userId: number): User | undefined {
    return this.usersState().find((user) => user.id === userId);
  }
}
