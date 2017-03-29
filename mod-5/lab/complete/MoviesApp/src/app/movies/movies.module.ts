import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MovieListComponent,
    MovieEditorComponent
  ],
  declarations: [MovieListItemComponent, MovieListComponent, MovieEditorComponent]
})
export class MoviesModule { }
