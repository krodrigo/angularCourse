import {Component, OnInit, Input} from '@angular/core';
import { Client } from './models/client';
import { Point } from './models/point';
import { ClientService } from './services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clients: Observable<Client[]>;
  selectedClient: Client;
  clientPoint: Point;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = this.clientService.retrieveClients();
  }

  onSelected(client: Client) {
    this.selectedClient = client;
    this.clientService
        .retrievePoints()
        .subscribe(points => this.clientPoint = points);
  }

  onBackClicked() {
    this.selectedClient = null;
    this.clientPoint = null;
  }
}
