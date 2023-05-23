import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AuthGuard } from "./features/auth/auth.guard";
import { RecentlyPlayedComponent } from "./features/recently-played/recently-played.component";
import { TopArtistsComponent } from "./features/top-artists/top-artists.component";
import { TopTracksComponent } from "./features/top-tracks/top-tracks.component";

const routes: Routes = [
  { path: "signin", component: SignInComponent },
  { path: "", redirectTo: "/top-tracks", pathMatch: "full" },
  { path: "top-tracks", component: TopTracksComponent, canActivate: [AuthGuard] },
  { path: "top-artists", component: TopArtistsComponent, canActivate: [AuthGuard] },
  { path: "recently-played", component: RecentlyPlayedComponent, canActivate: [AuthGuard] },
  { path: "**", component: TopTracksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
