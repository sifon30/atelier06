import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WatchesComponent } from './watches/watches.component';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { UpdateWatchComponent } from './update-watch/update-watch.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WatchesComponent,
    AddWatchComponent,
    UpdateWatchComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
