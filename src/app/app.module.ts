import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './/app-routing.module';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    UiModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    LoginComponent,
    UserComponent,
    ButtonComponent
  ],
})

export class AppModule { }
