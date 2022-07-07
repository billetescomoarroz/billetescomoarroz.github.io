import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StyleComponent } from './style/style.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { TopicsComponent } from './topics/topics.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleComponent,
    FooterComponent,
    FrontComponent,
    TopicsComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
