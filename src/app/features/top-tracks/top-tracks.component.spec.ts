import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatTabsModule } from "@angular/material/tabs";
import { TopTracksComponent } from "./top-tracks.component";
import { TracksComponent } from "../../components/tracks/tracks.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("TopTracksComponent", () => {
  let component: TopTracksComponent;
  let fixture: ComponentFixture<TopTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTabsModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState: {} })],
      declarations: [TopTracksComponent, TracksComponent],
    });
    fixture = TestBed.createComponent(TopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
