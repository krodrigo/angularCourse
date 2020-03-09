import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.scss']
})
export class ListItemComponentComponent implements OnInit {
  @Input() client: Client;
  @Output() selectedClient: EventEmitter<Client> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSelection() {
    this.selectedClient.emit(this.client);
  }
}
