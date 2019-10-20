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

  loadedChoice = "Repositories";

  onChoiceSwitch(choice: string) {
    this.loadedChoice = choice;
  }
  constructor(private GitApiService: GitApiService) {}
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
}
