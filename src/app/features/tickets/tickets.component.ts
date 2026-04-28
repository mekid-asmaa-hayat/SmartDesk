import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../core/models/ticket.model';
import { TicketService } from '../../core/services/ticket.service';
import { UserService } from '../../core/services/user.service';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    TitleCasePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  private readonly ticketService = inject(TicketService);
  private readonly userService = inject(UserService);
  private readonly dialog = inject(MatDialog);

  readonly displayedColumns = ['title', 'status', 'priority', 'assignee', 'createdAt', 'actions'];
  readonly search = signal('');

  readonly tickets = computed(() => {
    const query = this.search().toLowerCase().trim();
    return this.ticketService.tickets().filter((ticket) => {
      if (!query) {
        return true;
      }

      return [ticket.title, ticket.category, ticket.requester, ticket.status, ticket.priority]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });
  });

  getAssigneeName(assigneeId: number): string {
    return this.userService.findById(assigneeId)?.name ?? 'Unassigned';
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(TicketDialogComponent, {
      width: '760px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe((value: Omit<Ticket, 'id' | 'createdAt'> | undefined) => {
      if (!value) {
        return;
      }

      this.ticketService.create(value);
    });
  }

  openEditDialog(ticket: Ticket): void {
    const dialogRef = this.dialog.open(TicketDialogComponent, {
      width: '760px',
      data: { mode: 'edit', ticket }
    });

    dialogRef.afterClosed().subscribe((value: Omit<Ticket, 'id' | 'createdAt'> | undefined) => {
      if (!value) {
        return;
      }

      this.ticketService.update({
        ...ticket,
        ...value
      });
    });
  }

  deleteTicket(ticketId: number): void {
    this.ticketService.remove(ticketId);
  }
}
