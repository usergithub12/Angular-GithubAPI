import { Component } from "@angular/core";
import { GitApiService } from "./git-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  username = "usergithub12";
  followers: string[];
  repos: string[];
  user: string[];
  commits: string[];
  reponame: string;
  loadedChoice = "Repositories";

  onChoiceSwitch(choice: string) {
    this.loadedChoice = choice;
  }

  constructor(private GitApiService: GitApiService) {
    this.getReposCommits();
  }

  getUserFollowers() {
    this.GitApiService.GetUserFollowers(this.username).subscribe(
      (data: any[]) => {
        console.log(data);
        this.followers = data;
      }
    );
  }
  getUserRepo() {
    this.GitApiService.GetUserRepo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.repos = data;
    });
  }

  getUserInfo() {
    this.GitApiService.GetUserInfo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.user = data;
    });
  }
  getReposCommits() {
    console.log(
      "call Repos commits reposname from GITSERVICE=>",
      this.GitApiService.activeRepos
    );
    this.GitApiService.GetReposCommits(
      this.username,
      this.GitApiService.activeRepos
    ).subscribe((data: any[]) => {
      console.log(data);
      this.commits = data;
    });
  }
}
