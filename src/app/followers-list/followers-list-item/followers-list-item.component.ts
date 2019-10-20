import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-followers-list-item",
  templateUrl: "./followers-list-item.component.html",
  styleUrls: ["./followers-list-item.component.scss"]
})
export class FollowersListItemComponent implements OnInit {
  @Input() singleFollower: string[];
  constructor() {}

  ngOnInit() {}
}
