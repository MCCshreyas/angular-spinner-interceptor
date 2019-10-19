import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader.service';

@NgModule({
  imports:
    [
      BrowserModule,
      FormsModule,
      MatProgressSpinnerModule
    ],
  providers: [LoaderService],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
