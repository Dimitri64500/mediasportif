import {Pipe, PipeTransform} from '@angular/core';
import {ArticleNote} from '../../Model/ArticleNote';
import {forEach} from "@angular/router/src/utils/collection";

@Pipe({
  name: 'sousCatFilter',
})


export class FiltreArticle {

  transform(value: ArticleNote[], selectedSousCat: number[]): ArticleNote[] {

    if (value) {
      if (selectedSousCat) {
        if (selectedSousCat.length > 0) {
          var myvalue = value.filter(article => {
            for (let selsousCat in selectedSousCat) {
              if (article.sousCategorie) {
                for (let idsousCat in article.sousCategorie) {
                  let returnvalue: boolean;
                  returnvalue = (article.sousCategorie[idsousCat].idsouscategorie == selectedSousCat[selsousCat]);
                  if (returnvalue == true) {
                    return returnvalue;
                  }
                }
              }
            }
            return false;
          });
        } else {
          return value;
        }
      } else {
        return value;
      }
      return myvalue;
    }
  }
}
