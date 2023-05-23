import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

export const muteFirst = <T1, T2, R>(
    first$: Observable<T1>,
    second$: Observable<T2>,
    third$: Observable<R>,
): Observable<R> =>
    combineLatest([first$, second$, third$]).pipe(
        filter(([, b]: [T1, T2, R]) => !!b),
        map(([, , c]) => c),
        distinctUntilChanged(),
    );
