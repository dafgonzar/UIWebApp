import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EditorialComponent} from './editorial/editorial.component';
import {AuthorComponent} from './author/author.component';
import {BookComponent} from './book/book.component';

const routes: Routes = [
  {path: 'editorial', component:EditorialComponent},
  {path: 'author', component:AuthorComponent},
  {path: 'book', component:BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
