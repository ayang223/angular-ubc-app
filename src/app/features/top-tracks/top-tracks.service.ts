import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, filter, share, startWith, switchMap, take, tap } from "rxjs/operators";
import { muteFirst } from "../../shared/functions/mute-first.function";
import { AppState } from "../../models/app.state";

import {
  loadLongTermTopTrackFail,
  loadLongTermTopTracks,
  loadLongTermTopTracksSuccess,
  loadMediumTermTopTrackFail,
  loadMediumTermTopTracks,
  loadMediumTermTopTracksSuccess,
  loadShortTermTopTrackFail,
  loadShortTermTopTracks,
  loadShortTermTopTracksSuccess,
} from "../../store/actions/top-track.actions";
import {
  selectLongTermTopTracks,
  selectLongTermTopTracksAreLoaded,
  selectLongTermTopTracksAreLoading,
  selectMediumTermTopTracks,
  selectMediumTermTopTracksAreLoaded,
  selectMediumTermTopTracksAreLoading,
  selectShortTermTopTracks,
  selectShortTermTopTracksAreLoaded,
  selectShortTermTopTracksAreLoading,
} from "../../store/selectors/top-track.selector";
import { Track } from "../../models/track.model";

@Injectable({
  providedIn: "root",
})
export class TopTrackService {
  readonly shortTermTopTracks$: Observable<Track[]>;
  readonly shortTermTopTracksAreLoading$: Observable<boolean>;
  readonly shortTermTopTracksAreLoaded$: Observable<boolean>;

  readonly mediumTermTopTracks$: Observable<Track[]>;
  readonly mediumTermTopTracksAreLoading$: Observable<boolean>;
  readonly mediumTermTopTracksAreLoaded$: Observable<boolean>;

  readonly longTermTopTracks$: Observable<Track[]>;
  readonly longTermTopTracksAreLoading$: Observable<boolean>;
  readonly longTermTopTracksAreLoaded$: Observable<boolean>;

  readonly getShortTermTopTracks$: () => Observable<Track[] | void> = (): Observable<Track[] | void> =>
    // if tracks not loaded get tracks otherwise emit observable shortTermTopTracks$
    muteFirst(
      this.getShortTermTopTracks().pipe(startWith(undefined)),
      this.shortTermTopTracksAreLoaded$,
      this.shortTermTopTracks$
    );

  readonly getMediumTermTopTracks$: () => Observable<Track[] | void> = (): Observable<Track[] | void> =>
    muteFirst(
      this.getMediumTermTopTracks().pipe(startWith(undefined)),
      this.mediumTermTopTracksAreLoaded$,
      this.mediumTermTopTracks$
    );

  readonly getLongTermTopTracks$: () => Observable<Track[] | void> = (): Observable<Track[] | void> =>
    muteFirst(
      this.getLongTermTopTracks().pipe(startWith(undefined)),
      this.longTermTopTracksAreLoaded$,
      this.longTermTopTracks$
    );

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.shortTermTopTracks$ = this.store.pipe(select(selectShortTermTopTracks));
    this.shortTermTopTracksAreLoaded$ = this.store.pipe(select(selectShortTermTopTracksAreLoaded));
    this.shortTermTopTracksAreLoading$ = this.store.pipe(select(selectShortTermTopTracksAreLoading));

    this.mediumTermTopTracks$ = this.store.pipe(select(selectMediumTermTopTracks));
    this.mediumTermTopTracksAreLoaded$ = this.store.pipe(select(selectMediumTermTopTracksAreLoaded));
    this.mediumTermTopTracksAreLoading$ = this.store.pipe(select(selectMediumTermTopTracksAreLoading));

    this.longTermTopTracks$ = this.store.pipe(select(selectLongTermTopTracks));
    this.longTermTopTracksAreLoaded$ = this.store.pipe(select(selectLongTermTopTracksAreLoaded));
    this.longTermTopTracksAreLoading$ = this.store.pipe(select(selectLongTermTopTracksAreLoading));
  }

  getShortTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    // if data not loaded dispatch action then switch to new observable loadShortTermTopTracks
    return this.shortTermTopTracksAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadShortTermTopTracks())),
      switchMap(() => this.loadShortTermTopTracks()),
      share()
    );
  }

  getMediumTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    return this.mediumTermTopTracksAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadMediumTermTopTracks())),
      switchMap(() => this.loadMediumTermTopTracks()),
      share()
    );
  }

  getLongTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    return this.longTermTopTracksAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadLongTermTopTracks())),
      switchMap(() => this.loadLongTermTopTracks()),
      share()
    );
  }

  private loadShortTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Track[]; total: number; count: number }>("assets/dummy-short-term-top-tracks-response.json")
      .pipe(
        tap((response) => this.setShortTermTracks(response.items)),
        catchError((error) => of(this.setErrorShortTermTrack(loadShortTermTopTrackFail({ error }))))
      );
  }

  private loadMediumTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Track[]; total: number; count: number }>("assets/dummy-medium-term-top-tracks-response.json")
      .pipe(
        tap((response) => this.setMediumTermTracks(response.items)),
        catchError((error) => of(this.setErrorMediumTermTrack(loadMediumTermTopTrackFail({ error }))))
      );
  }

  private loadLongTermTopTracks(): Observable<{ items: Track[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Track[]; total: number; count: number }>("assets/dummy-long-term-top-tracks-response.json")
      .pipe(
        tap((response) => this.setLongTermTracks(response.items)),
        catchError((error) => of(this.setErrorLongTermTrack(loadLongTermTopTrackFail({ error }))))
      );
  }

  private setShortTermTracks(topTracks: Track[]): void {
    this.store.dispatch(loadShortTermTopTracksSuccess({ topTracks }));
  }

  private setMediumTermTracks(topTracks: Track[]): void {
    this.store.dispatch(loadMediumTermTopTracksSuccess({ topTracks }));
  }

  private setLongTermTracks(topTracks: Track[]): void {
    this.store.dispatch(loadLongTermTopTracksSuccess({ topTracks }));
  }

  private setErrorShortTermTrack(action: Action): void {
    this.store.dispatch(action);
  }

  private setErrorMediumTermTrack(action: Action): void {
    this.store.dispatch(action);
  }

  private setErrorLongTermTrack(action: Action): void {
    this.store.dispatch(action);
  }
}
