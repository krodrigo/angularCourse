import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ClientListComponent} from './clientlist/client-list.component';
import {filter, take} from 'rxjs/operators';
import {ClientService} from './services/client.service';
import {ICliente} from './models/cliente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('Cliente') clienteComponent: ClientListComponent;
  clientes: ICliente[];
  labels = [
    'Saldo',
    'Histórico',
    'Utilizados',
    'Perdidos'
  ];
  mapLabels = {};

  constructor(private clientesService: ClientService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
  }

  private getData() {
    this.clientesService.buscarClientes()
      .pipe(filter(res => !!res), take(1))
      .subscribe(lista => this.clientes = lista);
    this.clientesService.buscarPontos()
      .pipe(filter(res => !!res), take(1))
      .subscribe(pontos => {
        this.labels.forEach(label => {
          if (pontos.expirados && label === 'Perdidos') {
            this.mapLabels[label] = pontos.expirados;
          }
          if (pontos.total && label === 'Saldo') {
            this.mapLabels[label] = pontos.total - pontos.utilizados - pontos.expirados;
          }
          if (pontos.total && label === 'Histórico') {
            this.mapLabels[label] = pontos.total;
          }
          if (pontos.utilizados && label === 'Utilizados') {
            this.mapLabels[label] = pontos.utilizados;
          }
        });
      });
  }

  ngOnDestroy(): void {
  }
}
