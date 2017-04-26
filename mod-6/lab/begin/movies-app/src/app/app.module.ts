import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListItemComponent,
    MovieEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
