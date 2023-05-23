import { Component, inject } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"],
})
export class WrapperComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  onSignOutPress = () => {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/signin"]);
  };
}
