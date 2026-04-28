import { Component, computed, inject } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TicketService } from '../../core/services/ticket.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DatePipe, TitleCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private readonly ticketService = inject(TicketService);
  private readonly userService = inject(UserService);

  readonly stats = computed(() => [
    { label: 'Total tickets', value: this.ticketService.ticketCount(), icon: 'confirmation_number' },
    { label: 'Open tickets', value: this.ticketService.openCount(), icon: 'priority_high' },
    { label: 'In progress', value: this.ticketService.inProgressCount(), icon: 'pending_actions' },
    { label: 'High priority', value: this.ticketService.highPriorityCount(), icon: 'warning' }
  ]);

  readonly recentTickets = computed(() => this.ticketService.tickets().slice(0, 5));
  readonly teamMembers = this.userService.users;
}
