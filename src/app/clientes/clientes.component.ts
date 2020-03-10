import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/client';
import {UserService} from '../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clients: Observable<User[]>;
  selectedClient: User;
  busca = 'Paulo';

  constructor(private clientService: UserService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.clients = this.clientService.retrieveClients();
  }

  onSelected(client: User): void {
    this.selectedClient = client;
  }

}
