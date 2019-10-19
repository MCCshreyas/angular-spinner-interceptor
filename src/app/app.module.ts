import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../loader-interceptor.service';

@NgModule({
  imports:
    [
      BrowserModule,
      FormsModule,
      MatProgressSpinnerModule
    ],
  providers: [LoaderService, 
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
