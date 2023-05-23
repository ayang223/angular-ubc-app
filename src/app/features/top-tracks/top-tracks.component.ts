import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AppState } from "../../models/app.state";
import { TopTrackService } from "./top-tracks.service";
import { delay, take } from "rxjs/operators";
import { Track } from "../../models/track.model";
import {
  selectLongTermTopTracks,
  selectMediumTermTopTracks,
  selectShortTermTopTracks,
} from "../../store/selectors/top-track.selector";

@Component({
  selector: "app-top-tracks",
  templateUrl: "./top-tracks.component.html",
  styleUrls: ["./top-tracks.component.scss"],
})
export class TopTracksComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;

  shortTermTopTracks$: Observable<Track[]>;
  mediumTermTopTracks$: Observable<Track[]>;
  longTermTopTracks$: Observable<Track[]>;

  constructor(private store: Store<AppState>, private topTrackService: TopTrackService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.topTrackService.getShortTermTopTracks$().pipe(take(2)).subscribe());
    this.subscriptions.add(this.topTrackService.getMediumTermTopTracks$().pipe(take(2)).subscribe());
    this.subscriptions.add(this.topTrackService.getLongTermTopTracks$().pipe(take(2)).subscribe());
    this.shortTermTopTracks$ = this.store.pipe(select(selectShortTermTopTracks));
    this.mediumTermTopTracks$ = this.store.pipe(select(selectMediumTermTopTracks));
    this.longTermTopTracks$ = this.store.pipe(select(selectLongTermTopTracks));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
