import {SousCategorie} from "./SousCategorie";

export class ArticleNote {
  id: number;
  titre: string;
  texte: string;
  date: Date;
  url: string;
  souscategorie: SousCategorie[];
}
