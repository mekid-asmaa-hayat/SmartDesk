import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Ticket, TicketPriority, TicketStatus } from '../../../core/models/ticket.model';
import { UserService } from '../../../core/services/user.service';

export interface TicketDialogData {
  mode: 'create' | 'edit';
  ticket?: Ticket;
}

@Component({
  selector: 'app-ticket-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './ticket-dialog.component.html'
})
export class TicketDialogComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<TicketDialogComponent>);
  private readonly userService = inject(UserService);

  readonly users = this.userService.users;
  readonly statuses: TicketStatus[] = ['open', 'in_progress', 'resolved'];
  readonly priorities: TicketPriority[] = ['low', 'medium', 'high'];

  form!: FormGroup; // ✅ IMPORTANT

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: TicketDialogData) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      title: [this.data.ticket?.title ?? '', [Validators.required, Validators.minLength(5)]],
      description: [this.data.ticket?.description ?? '', [Validators.required, Validators.minLength(10)]],
      category: [this.data.ticket?.category ?? 'Product', Validators.required],
      requester: [this.data.ticket?.requester ?? '', Validators.required],
      assigneeId: [this.data.ticket?.assigneeId ?? 2, Validators.required],
      status: [this.data.ticket?.status ?? 'open' as TicketStatus, Validators.required],
      priority: [this.data.ticket?.priority ?? 'medium' as TicketPriority, Validators.required]
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.form.getRawValue());
  }
}