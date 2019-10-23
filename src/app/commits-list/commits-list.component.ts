import { Component, OnInit, Input } from "@angular/core";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-commits-list",
  templateUrl: "./commits-list.component.html",
  styleUrls: ["./commits-list.component.scss"]
})
export class CommitsListComponent implements OnInit {
  @Input() reponame: string;
  @Input() userreponame: string;
  @Input() commits: string[];

  constructor(private GitApiService: GitApiService) {
    this.getReposCommits();
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    this.getReposCommits();
  }
  getReposCommits() {
    console.log(
      "COMMITS reposname  =>",
      this.GitApiService.activeRepos + "this.userreponame"
    );
    this.GitApiService.GetReposCommits(
      this.userreponame,
      this.reponame
    ).subscribe((data: any[]) => {
      console.log(data);
      this.commits = data;
    });
  }
}
