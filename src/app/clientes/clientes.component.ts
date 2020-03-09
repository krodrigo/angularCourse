import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {ClientService} from '../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clients: Observable<Client[]>;
  selectedClient: Client;
  busca = 'Paulo';

  constructor(private clientService: ClientService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.clients = this.clientService.retrieveClients();
  }

  onSelected(client: Client): void {
    this.selectedClient = client;
  }

}
