import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeartSvgComponent } from './heart-svg/heart-svg.component';
import { CircleSvgComponent } from './circle-svg/circle-svg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAehxPHDbNScSrsbLoh98gWmiYlDXebgmQ",
  authDomain: "boxing-frontend.firebaseapp.com",
  databaseURL: "https://boxing-frontend.firebaseio.com",
  projectId: "boxing-frontend",
  storageBucket: "boxing-frontend.appspot.com",
  messagingSenderId: "439486935948",
  appId: "1:439486935948:web:e7f82e8c29c0b370d1dca9",
  measurementId: "G-HG2Z0G7CTT"
};

interface NgxSpinnerConfig {
  type?: string;
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HeartSvgComponent,
    CircleSvgComponent,
    OrderSuccessComponent,
    OrderFailedComponent,
    FooterComponent,
    HeaderComponent,
    OrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot(),
    TableModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
