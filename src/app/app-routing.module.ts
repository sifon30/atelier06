import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchesComponent } from './watches/watches.component';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { UpdateWatchComponent } from './update-watch/update-watch.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { watchGuard } from './watche.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';



const routes: Routes = [
  { path: 'watches', component: WatchesComponent },
  { path: 'add-watch', component: AddWatchComponent , canActivate:[watchGuard]},
  { path: 'updateWatch/:id', component: UpdateWatchComponent },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},

  {path: "rechercheParNom", component : RechercheParNomComponent},

  { path: '', redirectTo: 'watches', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
