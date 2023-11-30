import { Component, OnInit } from '@angular/core';
import { Watch } from '../model/watch.model';
import { WatchService } from '../services/watch.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
})
export class WatchesComponent implements OnInit {
  watches: Watch[];

  constructor(private watchService: WatchService,
    public authService: AuthService) {
    this.watches = watchService.listeWatch();
  }

  ngOnInit(): void {}
  supprimerWatch(wt: Watch) {
    let conf = confirm('vous etes sure');
    if (conf) this.watchService.supprimerWatch(wt);
  }

}
