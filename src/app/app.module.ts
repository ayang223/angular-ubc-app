import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopTracksComponent } from "./features/top-tracks/top-tracks.component";
import { TopArtistsComponent } from "./features/top-artists/top-artists.component";
import { RecentlyPlayedComponent } from "./features/recently-played/recently-played.component";
import { WrapperComponent } from "./components/wrapper/wrapper.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AuthGuard } from "./features/auth/auth.guard";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatTabsModule } from "@angular/material/tabs";
import { TracksComponent } from "./components/tracks/tracks.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { RecentlyPlayedTableComponent } from "./components/recently-played-table/recently-played-table.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TopTracksComponent,
    TopArtistsComponent,
    RecentlyPlayedComponent,
    WrapperComponent,
    SignInComponent,
    TracksComponent,
    ArtistsComponent,
    RecentlyPlayedTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
