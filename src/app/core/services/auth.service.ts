import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

const STORAGE_KEY = 'smartdesk-current-user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly demoUsers = signal<User[]>([
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
    }
  ]);

  private readonly currentUserState = signal<User | null>(this.readStoredUser());

  readonly currentUser = computed(() => this.currentUserState());
  readonly isLoggedIn = computed(() => !!this.currentUserState());
  readonly isAdmin = computed(() => this.currentUserState()?.role === 'admin');

  constructor(private readonly router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.demoUsers().find((candidate) => candidate.email === email && candidate.password === password);

    if (!user) {
      return false;
    }

    this.currentUserState.set(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
  }

  logout(): void {
    this.currentUserState.set(null);
    localStorage.removeItem(STORAGE_KEY);
    void this.router.navigate(['/login']);
  }

  private readStoredUser(): User | null {
    const rawUser = localStorage.getItem(STORAGE_KEY);
    return rawUser ? (JSON.parse(rawUser) as User) : null;
  }
}
