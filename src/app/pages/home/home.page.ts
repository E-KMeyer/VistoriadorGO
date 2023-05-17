import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  formulario: any; // Variável para armazenar os dados do formulário

  constructor(private storage: StorageService) {}

  async pegarFormulario() {
    // Consulta o form do usuário
    this.formulario = await this.storage.get("cadastro");
    console.log(JSON.stringify(this.formulario, null, 2));
  }


  ngOnInit() {}
}