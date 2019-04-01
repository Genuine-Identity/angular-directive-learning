import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ConsoleEntryDirective } from './console.directive';
import { HighlightSingerDirective } from './highlight-singer.directive';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ConsoleEntryDirective,
    HighlightSingerDirective,
    ShadowDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
