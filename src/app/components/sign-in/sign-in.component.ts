import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent {
  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = false;
  }

  onSignInPress = () => {
    // to simulate sign in auth from spotify
    this.isLoading = true;
    setTimeout(() => {
      localStorage.setItem("currentUser", "Alex");
      this.isLoading = false;
      this.router.navigate(["/top-tracks"]);
    }, 1000);
  };
}
