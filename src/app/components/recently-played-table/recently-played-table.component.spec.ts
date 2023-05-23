import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RecentlyPlayedTableComponent } from "./recently-played-table.component";

describe("RecentlyPlayedComponent", () => {
  let component: RecentlyPlayedTableComponent;
  let fixture: ComponentFixture<RecentlyPlayedTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyPlayedTableComponent],
    });
    fixture = TestBed.createComponent(RecentlyPlayedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
