import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Watch } from '../model/watch.model';
import { WatchService } from '../services/watch.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-watch',
  templateUrl: './update-watch.component.html',
})
export class UpdateWatchComponent {
  currentWatch = new Watch();
  genres!: Genre[];
  updatedCatId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private watchService: WatchService
  ) {}

  ngOnInit(): void {
    this.genres = this.watchService.listeCategories();
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentWatch = this.watchService.consulterWatch(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentWatch.genre!.idCat;

    // console.log(this.currentWatch);
  }
  updateWatch() {
    this.currentWatch.genre = this.watchService.consulterCategorie(
      this.updatedCatId
    );

    this.watchService.updateWatch(this.currentWatch);
    this.router.navigate(['watches']);
  }
}
