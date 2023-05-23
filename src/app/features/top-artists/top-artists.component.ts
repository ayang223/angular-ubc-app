import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription, take } from "rxjs";
import { AppState } from "../../models/app.state";
import { Artist } from "../../models/artist.model";
import {
  selectLongTermTopArtists,
  selectMediumTermTopArtists,
  selectShortTermTopArtists,
} from "../../store/selectors/top-artists.selector";
import { TopArtistsService } from "./top-artists.service";

@Component({
  selector: "app-top-artists",
  templateUrl: "./top-artists.component.html",
  styleUrls: ["./top-artists.component.scss"],
})
export class TopArtistsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;

  shortTermTopArtists$: Observable<Artist[]>;
  mediumTermTopArtists$: Observable<Artist[]>;
  longTermTopArtists$: Observable<Artist[]>;

  constructor(private store: Store<AppState>, private topArtistsService: TopArtistsService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.topArtistsService.getShortTermTopArtists$().pipe(take(2)).subscribe());
    this.subscriptions.add(this.topArtistsService.getMediumTermTopArtists$().pipe(take(2)).subscribe());
    this.subscriptions.add(this.topArtistsService.getLongTermTopArtists$().pipe(take(2)).subscribe());
    this.shortTermTopArtists$ = this.store.pipe(select(selectShortTermTopArtists));
    this.mediumTermTopArtists$ = this.store.pipe(select(selectMediumTermTopArtists));
    this.longTermTopArtists$ = this.store.pipe(select(selectLongTermTopArtists));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
