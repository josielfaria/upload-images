import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeIconDialog } from './components/change-icon/change-icon.dialog';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UploadImagePageComponent } from './pages/upload-image-page/upload-image-page.component';
import { IconNamesPipe } from './shared/pipes/icon-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconNamesPipe,
    ChangeIconDialog,
    NotFoundPageComponent,
    HomePageComponent,
    UploadImagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
