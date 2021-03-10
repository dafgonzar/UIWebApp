import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ShowEditComponent } from './editorial/show-edit/show-edit.component';
import { AddEditEditComponent } from './editorial/add-edit-edit/add-edit-edit.component';
import { AuthorComponent } from './author/author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { BookComponent } from './book/book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EditorialComponent,
    ShowEditComponent,
    AddEditEditComponent,
    AuthorComponent,
    ShowAuthorComponent,
    AddEditAuthorComponent,
    BookComponent,
    ShowBookComponent,
    AddEditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
