import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../shared/view-models/usuario.view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioViewModel = new UsuarioViewModel({});

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('Teste');
  }
}
