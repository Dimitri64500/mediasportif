import {Status} from './Status';

export class Article {
  id: number;
  titre: string;
  texte: string;
  date: Date;
  idutilisateur: number;
  url: string;
  status: Status;
  etiquette: string;
  activecomment: boolean;
}
