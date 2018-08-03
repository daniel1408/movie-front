export class UsuarioViewModel {

  public nome: String;
  public senha: String;

  constructor(data: any) {
    this.nome = data.nome ? data.nome : null;
    this.senha = data.senha ? data.senha : null;
  }
}
