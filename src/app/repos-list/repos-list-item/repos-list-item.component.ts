import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-repos-list-item",
  templateUrl: "./repos-list-item.component.html",
  styleUrls: ["./repos-list-item.component.scss"]
})
export class ReposListItemComponent implements OnInit {
  @Input() singleRepo: string[];
  constructor() {}

  ngOnInit() {}
}
