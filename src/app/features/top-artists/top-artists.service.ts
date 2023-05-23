import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, filter, share, startWith, switchMap, take, tap } from "rxjs/operators";
import { muteFirst } from "../../shared/functions/mute-first.function";
import { AppState } from "../../models/app.state";

import { Artist } from "../../models/artist.model";
import {
  selectLongTermTopArtists,
  selectLongTermTopArtistsAreLoaded,
  selectLongTermTopArtistsAreLoading,
  selectMediumTermTopArtists,
  selectMediumTermTopArtistsAreLoaded,
  selectMediumTermTopArtistsAreLoading,
  selectShortTermTopArtists,
  selectShortTermTopArtistsAreLoaded,
  selectShortTermTopArtistsAreLoading,
} from "../../store/selectors/top-artists.selector";
import {
  loadLongTermTopArtistFail,
  loadLongTermTopArtists,
  loadLongTermTopArtistsSuccess,
  loadMediumTermTopArtistFail,
  loadMediumTermTopArtists,
  loadMediumTermTopArtistsSuccess,
  loadShortTermTopArtistFail,
  loadShortTermTopArtists,
  loadShortTermTopArtistsSuccess,
} from "../../store/actions/top-artist.actions";

@Injectable({
  providedIn: "root",
})
export class TopArtistsService {
  readonly shortTermTopArtists$: Observable<Artist[]>;
  readonly shortTermTopArtistsAreLoading$: Observable<boolean>;
  readonly shortTermTopArtistsAreLoaded$: Observable<boolean>;

  readonly mediumTermTopArtists$: Observable<Artist[]>;
  readonly mediumTermTopArtistsAreLoading$: Observable<boolean>;
  readonly mediumTermTopArtistsAreLoaded$: Observable<boolean>;

  readonly longTermTopArtists$: Observable<Artist[]>;
  readonly longTermTopArtistsAreLoading$: Observable<boolean>;
  readonly longTermTopArtistsAreLoaded$: Observable<boolean>;

  readonly getShortTermTopArtists$: () => Observable<Artist[] | void> = (): Observable<Artist[] | void> =>
    muteFirst(
      this.getShortTermTopArtists().pipe(startWith(undefined)),
      this.shortTermTopArtistsAreLoaded$,
      this.shortTermTopArtists$
    );

  readonly getMediumTermTopArtists$: () => Observable<Artist[] | void> = (): Observable<Artist[] | void> =>
    muteFirst(
      this.getMediumTermTopArtists().pipe(startWith(undefined)),
      this.mediumTermTopArtistsAreLoaded$,
      this.mediumTermTopArtists$
    );

  readonly getLongTermTopArtists$: () => Observable<Artist[] | void> = (): Observable<Artist[] | void> =>
    muteFirst(
      this.getLongTermTopArtists().pipe(startWith(undefined)),
      this.longTermTopArtistsAreLoaded$,
      this.longTermTopArtists$
    );

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.shortTermTopArtists$ = this.store.pipe(select(selectShortTermTopArtists));
    this.shortTermTopArtistsAreLoaded$ = this.store.pipe(select(selectShortTermTopArtistsAreLoaded));
    this.shortTermTopArtistsAreLoading$ = this.store.pipe(select(selectShortTermTopArtistsAreLoading));

    this.mediumTermTopArtists$ = this.store.pipe(select(selectMediumTermTopArtists));
    this.mediumTermTopArtistsAreLoaded$ = this.store.pipe(select(selectMediumTermTopArtistsAreLoaded));
    this.mediumTermTopArtistsAreLoading$ = this.store.pipe(select(selectMediumTermTopArtistsAreLoading));

    this.longTermTopArtists$ = this.store.pipe(select(selectLongTermTopArtists));
    this.longTermTopArtistsAreLoaded$ = this.store.pipe(select(selectLongTermTopArtistsAreLoaded));
    this.longTermTopArtistsAreLoading$ = this.store.pipe(select(selectLongTermTopArtistsAreLoading));
  }

  getShortTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    return this.shortTermTopArtistsAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadShortTermTopArtists())),
      switchMap(() => this.loadShortTermTopArtists()),
      share()
    );
  }

  getMediumTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    return this.mediumTermTopArtistsAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadMediumTermTopArtists())),
      switchMap(() => this.loadMediumTermTopArtists()),
      share()
    );
  }

  getLongTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    return this.longTermTopArtistsAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadLongTermTopArtists())),
      switchMap(() => this.loadLongTermTopArtists()),
      share()
    );
  }

  private loadShortTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Artist[]; total: number; count: number }>("assets/dummy-short-term-top-artists-response.json")
      .pipe(
        tap((response) => this.setShortTermArtists(response.items)),
        catchError((error) => of(this.setErrorShortTermArtists(loadShortTermTopArtistFail({ error }))))
      );
  }

  private loadMediumTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Artist[]; total: number; count: number }>("assets/dummy-medium-term-top-artists-response.json")
      .pipe(
        tap((response) => this.setMediumTermArtists(response.items)),
        catchError((error) => of(this.setErrorMediumTermArtists(loadMediumTermTopArtistFail({ error }))))
      );
  }

  private loadLongTermTopArtists(): Observable<{ items: Artist[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: Artist[]; total: number; count: number }>("assets/dummy-long-term-top-artists-response.json")
      .pipe(
        tap((response) => this.setLongTermArtists(response.items)),
        catchError((error) => of(this.setErrorLongTermArtists(loadLongTermTopArtistFail({ error }))))
      );
  }

  private setShortTermArtists(topArtists: Artist[]): void {
    this.store.dispatch(loadShortTermTopArtistsSuccess({ topArtists }));
  }

  private setMediumTermArtists(topArtists: Artist[]): void {
    this.store.dispatch(loadMediumTermTopArtistsSuccess({ topArtists }));
  }

  private setLongTermArtists(topArtists: Artist[]): void {
    this.store.dispatch(loadLongTermTopArtistsSuccess({ topArtists }));
  }

  private setErrorShortTermArtists(action: Action): void {
    this.store.dispatch(action);
  }

  private setErrorMediumTermArtists(action: Action): void {
    this.store.dispatch(action);
  }

  private setErrorLongTermArtists(action: Action): void {
    this.store.dispatch(action);
  }
}
