import { computed, Injectable, signal } from '@angular/core';
import { Ticket } from '../models/ticket.model';

const TICKETS_STORAGE_KEY = 'smartdesk-tickets';

const defaultTickets: Ticket[] = [
  {
    id: 101,
    title: 'VPN access blocked after MFA',
    description: 'The finance team cannot connect to the corporate VPN after completing MFA.',
    status: 'open',
    priority: 'high',
    category: 'Infrastructure',
    assigneeId: 2,
    requester: 'Sonia Martin',
    createdAt: '2026-04-21T08:15:00Z'
  },
  {
    id: 102,
    title: 'Create export on support dashboard',
    description: 'Add a CSV export action in the manager dashboard.',
    status: 'in_progress',
    priority: 'medium',
    category: 'Product',
    assigneeId: 1,
    requester: 'Omar Haddad',
    createdAt: '2026-04-20T13:25:00Z'
  },
  {
    id: 103,
    title: 'Reset onboarding passwords for interns',
    description: 'Intern accounts should be reset before Friday onboarding.',
    status: 'resolved',
    priority: 'low',
    category: 'Access Management',
    assigneeId: 2,
    requester: 'HR Team',
    createdAt: '2026-04-18T10:05:00Z'
  }
];

@Injectable({ providedIn: 'root' })
export class TicketService {
  private readonly ticketsState = signal<Ticket[]>(this.readInitialTickets());

  readonly tickets = computed(() => this.ticketsState());
  readonly ticketCount = computed(() => this.ticketsState().length);
  readonly openCount = computed(() => this.ticketsState().filter((ticket) => ticket.status === 'open').length);
  readonly inProgressCount = computed(() => this.ticketsState().filter((ticket) => ticket.status === 'in_progress').length);
  readonly resolvedCount = computed(() => this.ticketsState().filter((ticket) => ticket.status === 'resolved').length);
  readonly highPriorityCount = computed(() => this.ticketsState().filter((ticket) => ticket.priority === 'high').length);

  create(ticketPayload: Omit<Ticket, 'id' | 'createdAt'>): void {
    const nextTicket: Ticket = {
      ...ticketPayload,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    this.ticketsState.update((tickets) => [nextTicket, ...tickets]);
    this.persist();
  }

  update(updatedTicket: Ticket): void {
    this.ticketsState.update((tickets) =>
      tickets.map((ticket) => (ticket.id === updatedTicket.id ? updatedTicket : ticket))
    );
    this.persist();
  }

  remove(ticketId: number): void {
    this.ticketsState.update((tickets) => tickets.filter((ticket) => ticket.id !== ticketId));
    this.persist();
  }

  findById(ticketId: number): Ticket | undefined {
    return this.ticketsState().find((ticket) => ticket.id === ticketId);
  }

  private persist(): void {
    localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(this.ticketsState()));
  }

  private readInitialTickets(): Ticket[] {
    const savedTickets = localStorage.getItem(TICKETS_STORAGE_KEY);
    return savedTickets ? (JSON.parse(savedTickets) as Ticket[]) : defaultTickets;
  }
}
