import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormattedCpfPipe } from '../pipes/formatted-cpf.pipe';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: Client;
  @Output() back: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onBack() {
    this.back.emit();
  }
}
