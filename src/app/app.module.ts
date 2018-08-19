import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './tools/user/user.component';
import { HomeComponent } from './tools/home/home.component';
import { UsersService } from './services/users.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './tools/people/people.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './tools/modal/modal.component';


const routes: Routes=[
  { path:'',component:AppComponent },
  { path: 'users', component:UserComponent },
  {path:'home' , component:HomeComponent },
  {path:'people' , component:PeopleComponent },
  {path:'getUser/:login',component:UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    PeopleComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModalModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
