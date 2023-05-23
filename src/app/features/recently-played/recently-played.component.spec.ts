import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { RecentlyPlayedComponent } from "./recently-played.component";
import { RecentlyPlayedTableComponent } from "../../components/recently-played-table/recently-played-table.component";

describe("RecentlyPlayedComponent", () => {
  let component: RecentlyPlayedComponent;
  let fixture: ComponentFixture<RecentlyPlayedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({ initialState: {} })],
      declarations: [RecentlyPlayedComponent, RecentlyPlayedTableComponent],
    });
    fixture = TestBed.createComponent(RecentlyPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
