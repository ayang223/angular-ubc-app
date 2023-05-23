import { Component, Input } from "@angular/core";
import { RecentlyPlayed } from "../../models/recently-played.model";

@Component({
  selector: "app-recently-played-table",
  templateUrl: "./recently-played-table.component.html",
  styleUrls: ["./recently-played-table.component.scss"],
})
export class RecentlyPlayedTableComponent {
  @Input()
  recentlyPlayed: RecentlyPlayed[] | null;

  openOnSpotify = (url: string): void => {
    window.open(url, "_blank");
  };
  getDate = (playedAt: string): string => {
    const timestamp = new Date(playedAt);
    return timestamp.toLocaleString();
  };
}
