import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription, take } from "rxjs";
import { AppState } from "../../models/app.state";
import { RecentlyPlayed } from "../../models/recently-played.model";
import { selectRecentlyPlayed } from "../../store/selectors/recently-played.selector";
import { RecentlyPlayedService } from "./recently-played.service";

@Component({
  selector: "app-recently-played",
  templateUrl: "./recently-played.component.html",
  styleUrls: ["./recently-played.component.scss"],
})
export class RecentlyPlayedComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;

  recentlyPlayed$: Observable<RecentlyPlayed[]>;

  constructor(private store: Store<AppState>, private recentlyPlayedService: RecentlyPlayedService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.recentlyPlayedService.getRecentlyPlayed$().pipe(take(2)).subscribe());
    this.recentlyPlayed$ = this.store.pipe(select(selectRecentlyPlayed));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
