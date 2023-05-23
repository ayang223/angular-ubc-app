import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, filter, share, startWith, switchMap, take, tap } from "rxjs/operators";
import { muteFirst } from "../../shared/functions/mute-first.function";
import { AppState } from "../../models/app.state";
import { RecentlyPlayed } from "../../models/recently-played.model";
import {
  selectRecentlyPlayed,
  selectRecentlyPlayedAreLoaded,
  selectRecentlyPlayedAreLoading,
} from "../../store/selectors/recently-played.selector";
import {
  loadRecentlyPlayed,
  loadRecentlyPlayedFail,
  loadRecentlyPlayedSuccess,
} from "../../store/actions/recently-played.action";

@Injectable({
  providedIn: "root",
})
export class RecentlyPlayedService {
  readonly recentlyPlayed$: Observable<RecentlyPlayed[]>;
  readonly recentlyPlayedAreLoading$: Observable<boolean>;
  readonly recentlyPlayedAreLoaded$: Observable<boolean>;

  readonly getRecentlyPlayed$: () => Observable<RecentlyPlayed[] | void> = (): Observable<RecentlyPlayed[] | void> =>
    muteFirst(this.getRecentlyPlayed().pipe(startWith(undefined)), this.recentlyPlayedAreLoaded$, this.recentlyPlayed$);

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.recentlyPlayed$ = this.store.pipe(select(selectRecentlyPlayed));
    this.recentlyPlayedAreLoaded$ = this.store.pipe(select(selectRecentlyPlayedAreLoaded));
    this.recentlyPlayedAreLoading$ = this.store.pipe(select(selectRecentlyPlayedAreLoading));
  }

  getRecentlyPlayed(): Observable<{ items: RecentlyPlayed[]; total: number; count: number } | void> {
    return this.recentlyPlayedAreLoaded$.pipe(
      filter((loaded) => !loaded),
      tap(() => this.store.dispatch(loadRecentlyPlayed())),
      switchMap(() => this.loadRecentlyPlayed()),
      share()
    );
  }

  private loadRecentlyPlayed(): Observable<{ items: RecentlyPlayed[]; total: number; count: number } | void> {
    // dummy data to simulate actual api call
    return this.http
      .get<{ items: RecentlyPlayed[]; total: number; count: number }>("assets/dummy-recently-played-response.json")
      .pipe(
        tap((response) => this.setRecentlyPlayed(response.items)),
        catchError((error) => of(this.setErrorShortTermTrack(loadRecentlyPlayedFail({ error }))))
      );
  }

  private setRecentlyPlayed(recentlyPlayed: RecentlyPlayed[]): void {
    this.store.dispatch(loadRecentlyPlayedSuccess({ recentlyPlayed }));
  }

  private setErrorShortTermTrack(action: Action): void {
    this.store.dispatch(action);
  }
}
