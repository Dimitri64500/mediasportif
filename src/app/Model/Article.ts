import {Status} from './Status';

export class Article {
  id: number;
  titre: string;
  texte: string;
  resume: string;
  date: Date;
  idutilisateur: number;
  url: string;
  status: Status;
  etiquette: string;
  activecomment: number;
  imagealaune: string;
  alaune:number;
  user:Auteur;
}

export class Auteur {
  nom:string;
  prenom:string;
  nomcomplet:string;
}
