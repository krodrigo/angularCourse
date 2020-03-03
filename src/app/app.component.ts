import {Component, OnInit} from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clients: Observable<Client[]>;
  selectedClient: Client;
  busca = 'Paulo'

  constructor(private clientService: ClientService,
     private router: Router,) {

  }
  ngOnInit(): void {
    this.clients = this.clientService.retrieveClients();
  }

  onSelected(client: Client): void {
    this.selectedClient = client;
  }
}
