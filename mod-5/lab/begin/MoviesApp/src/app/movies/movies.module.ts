import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MovieListComponent,
    MovieListItemComponent,
    MovieEditorComponent
  ],
  exports: [
    MovieListComponent,
    MovieEditorComponent
  ]
})
export class MoviesModule { }
