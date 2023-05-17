import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  nome: string = '';
  cpf: string = '';
  rg: string = '';
  telefone: string = '';
  endereco: string = '';
  cnh: string = '';
  foto: string = '';
  login: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  captureImage() {
    // Implemente a lógica para capturar a imagem da câmera aqui
  }

  constructor(private storage: StorageService, private router: Router) {}

  async cadastrarUsuario() {
    const usuario = {
      nome: this.nome,
      cpf: this.cpf,
      rg: this.rg,
      telefone: this.telefone,
      endereco: this.endereco,
      cnh: this.cnh,
      foto: this.foto,
      login: this.login,
      senha: this.senha,
    };

    if (this.senha !== this.confirmarSenha) {
      console.error('A senha e a confirmação de senha não correspondem.');
      // Exiba uma mensagem de erro ou tome outra ação apropriada 
      return;
    }
    await this.storage.set("cadastro",JSON.stringify(usuario));
    this.router.navigate(['/home']);
  }
   
}