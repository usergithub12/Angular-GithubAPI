import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ReposListComponent } from "./repos-list/repos-list.component";
import { ReposListItemComponent } from "./repos-list/repos-list-item/repos-list-item.component";
import { FormsModule } from "@angular/forms";
import { FollowersListComponent } from './followers-list/followers-list.component';
import { FollowersListItemComponent } from './followers-list/followers-list-item/followers-list-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReposListComponent,
    ReposListItemComponent,
    FollowersListComponent,
    FollowersListItemComponent,
    UserProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
