import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-repos-list-item",
  templateUrl: "./repos-list-item.component.html",
  styleUrls: ["./repos-list-item.component.scss"]
})
export class ReposListItemComponent implements OnInit {
  @Input() singleRepo: string[];
  constructor() {}
  @Output() selectedRepo = new EventEmitter<string[]>();
  ngOnInit() {}
  onActiveRepo() {
    console.log("emmit onactiverepe repo-list-item!", this.singleRepo);
    this.selectedRepo.emit(this.singleRepo);
  }
}
