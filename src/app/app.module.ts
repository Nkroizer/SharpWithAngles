import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAnimalComponent } from './components/edit-animal/edit-animal.component';
import { FormsModule } from '@angular/forms';
import { AnimalCellComponent } from './components/animal-cell/animal-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [
    AppComponent,
    EditAnimalComponent,
    AnimalCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
