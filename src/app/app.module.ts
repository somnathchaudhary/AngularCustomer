import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PpDetailComponent } from './pp/pp-detail/pp-detail.component';
import { PpDetailListComponent } from './pp/pp-detail-list/pp-detail-list.component';
import { HttpModule }    from '@angular/http';
//import { PPDetail } from './shared/ppdetail';
import { PPDetailService } from './shared/ppdetail.service';

@NgModule({
  declarations: [
    AppComponent,
    PpDetailComponent,
    PpDetailListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
