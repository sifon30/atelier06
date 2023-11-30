import { Component, OnInit } from '@angular/core';
import { Watch } from '../model/watch.model';
import { WatchService } from '../services/watch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';


@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
})
export class AddWatchComponent implements OnInit {
  newWatch = new Watch();
  genres! : Genre[];
newIdCat! : number;
newGenre! : Genre;
  // message: string = '';
  constructor(
    private watchService: WatchService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.genres = this.watchService.listeCategories();

    //throw new Error('Method not implemented.');
  }

  addWatch() {
    this.newGenre = 
this.watchService.consulterCategorie(this.newIdCat)
    this.watchService.ajouterWatch(this.newWatch);
    this.newWatch.genre = this.newGenre;

    //window.alert(`watch ${this.newWatch.nomWatch} ajouter avec succes`);
    this.router.navigate(['watches']);
  }
}
