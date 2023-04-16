import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrendingSubjectsComponent } from '../app/components/trending-subjects/trending-subjects.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingSubjectsComponent,
    HomeComponent,
    BooksListComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
