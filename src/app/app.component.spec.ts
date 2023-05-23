import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { WrapperComponent } from "./components/wrapper/wrapper.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSidenavModule, BrowserAnimationsModule, MatToolbarModule],
      declarations: [AppComponent, WrapperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ubc-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("angular-ubc-app");
  });
});
