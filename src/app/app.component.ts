import { Component } from "@angular/core";
import { ScullyRoutesService } from "@scullyio/ng-lib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public scully: ScullyRoutesService) {}
}
