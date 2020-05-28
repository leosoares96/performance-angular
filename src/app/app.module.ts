import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PsGuideModule } from 'porto-seguro-guide'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsGuideModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
