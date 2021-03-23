import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpConfig} from './httpconfig.interceptor';
import {PipesCustom} from './core/pipes/pipes-custom.module';
import { ModalComponent } from './features/components/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfig,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
