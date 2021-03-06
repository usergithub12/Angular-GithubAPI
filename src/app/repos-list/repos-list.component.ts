import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-repos-list",
  templateUrl: "./repos-list.component.html",
  styleUrls: ["./repos-list.component.scss"]
})
export class ReposListComponent implements OnInit {
  @Output() getSelectedRepo = new EventEmitter<string[]>();

  data: string[];
  @Input() username: string;
  @Input() repos: string[];
  title = "apigithub";
  constructor(private GitApiService: GitApiService) {}

  getUserRepo() {
    this.GitApiService.GetUserRepo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {
    console.log("Got uername!", this.username);
    //WORKING USER REPOSITORIES
    this.GitApiService.GetUserRepo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

  onRepoSelected(singleRepo) {
    this.GitApiService.activeRepos = singleRepo.name;
    console.log("REPO from repo-list", singleRepo);
    this.getSelectedRepo.emit(singleRepo);
  }
}
