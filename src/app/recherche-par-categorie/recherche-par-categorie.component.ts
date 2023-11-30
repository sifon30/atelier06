import { WatchService } from './../services/watch.service';
import { Component, OnInit } from '@angular/core';
import { Watch } from '../model/watch.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: []
})
export class RechercheParCategorieComponent implements OnInit {
  watches!: Watch[];
  genres!: Genre[];
  IdCategorie! : number;
 constructor(private watchService : WatchService ){}


  ngOnInit(): void {
    this.genres=this.watchService.listeCategories();
    this.watches=this.watchService.listeWatch();
    }



    onChange() {
      this.watches=this.watchService.rechercherParCategorie(this.IdCategorie);
      
      }
}
