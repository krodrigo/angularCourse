import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/client';
import { UserService } from '../../services/client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormattedCpfPipe } from '../../shared/pipes/formatted-cpf.pipe';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: User;
  @Output() back: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onBack() {
    this.back.emit();
  }
}
