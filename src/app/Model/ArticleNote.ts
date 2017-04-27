import {Categorie} from './Categorie';

export class ArticleNote {
  titre: string;
  texte: string;
  date: Date;
  url: string;
  souscategorie: Categorie[];
}
