import { Component, Input } from "@angular/core";
import { Track } from "../../models/track.model";

@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.scss"],
})
export class TracksComponent {
  @Input()
  tracks: Track[] | null;
}
