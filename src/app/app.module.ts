import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home/home-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'},
      { path: 'closed-transaction', loadChildren: './+transaction/transaction.module#TransactionModule'},
      { path: '**', redirectTo: '/home' }
    ])
  ],
  declarations: [
    AppComponent,
    HomeViewComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    NavComponent
],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [ AppComponent ]
})
export class AppModule {}
