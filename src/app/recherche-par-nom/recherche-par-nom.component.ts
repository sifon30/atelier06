import { Watch } from './../model/watch.model';
import { Component } from '@angular/core';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: []
})
export class RechercheParNomComponent {
nomWatch!:string;
watches!: Watch[];
allWatches!:Watch[];
searchTerm!:string;



constructor( private watchService : WatchService ){}
ngOnInit():void{
 this.watches= this.watchService.listeWatch();

    
}

rechercherWatch()
{


  this.watches=this.watchService.rechercherParNom(this.nomWatch);
}



onKeyUp(filterText : string){
  this.watches = this.allWatches.filter(item => item.nomWatch!.toLowerCase().includes(filterText));
  }

  
  
}
