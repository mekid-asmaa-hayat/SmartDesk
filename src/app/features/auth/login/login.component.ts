import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loginError = signal('');
  readonly demoAccounts = [
    { label: 'Admin', email: 'admin@smartdesk.dev', password: 'admin123' },
    { label: 'Agent', email: 'agent@smartdesk.dev', password: 'agent123' }
  ];

  readonly form = this.fb.nonNullable.group({
    email: ['admin@smartdesk.dev', [Validators.required, Validators.email]],
    password: ['admin123', [Validators.required, Validators.minLength(6)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();
    const isAuthenticated = this.authService.login(email, password);

    if (!isAuthenticated) {
      this.loginError.set('Invalid credentials. Use one of the demo accounts below.');
      return;
    }

    this.loginError.set('');
    void this.router.navigate(['/dashboard']);
  }

  fillDemoAccount(email: string, password: string): void {
    this.form.patchValue({ email, password });
  }
}
