import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', component: WikiComponent }, // Indirizzo URL per il routing
  { path: 'article/:title', component: ArticleComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
