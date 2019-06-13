import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { AppCardComponent } from './card/app-card.component';
import { AppListaSonoComponent } from './lista-sono/app-lista-sono.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppBaseComponent,
    AppCardComponent,
    AppListaSonoComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppBaseComponent]
})
export class AppModule { }
