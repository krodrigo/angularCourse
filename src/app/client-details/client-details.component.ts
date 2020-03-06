import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: Client;
  @Output() backClicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onBack() {
    this.backClicked.emit();
  }
}
