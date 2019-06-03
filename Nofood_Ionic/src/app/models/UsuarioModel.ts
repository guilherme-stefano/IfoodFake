import { ProviderBase } from "../base/providerBase";

export class UsuarioModel extends ProviderBase<UsuarioModel> {
    nome:string;
    email:string;
    senha:string;
    foto:string;
}