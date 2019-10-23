import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-commit-list-item",
  templateUrl: "./commit-list-item.component.html",
  styleUrls: ["./commit-list-item.component.scss"]
})
export class CommitListItemComponent implements OnInit {
  @Input() singleCommit: string[];
  constructor() {}

  ngOnInit() {}
}
