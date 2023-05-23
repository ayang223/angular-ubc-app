import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatTabsModule } from "@angular/material/tabs";
import { TopArtistsComponent } from "./top-artists.component";
import { ArtistsComponent } from "../../components/artists/artists.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("TopArtistsComponent", () => {
  let component: TopArtistsComponent;
  let fixture: ComponentFixture<TopArtistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTabsModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState: {} })],
      declarations: [TopArtistsComponent, ArtistsComponent],
    });
    fixture = TestBed.createComponent(TopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
