import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarFormatterPipe } from './star-rating/star-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
    StarFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
