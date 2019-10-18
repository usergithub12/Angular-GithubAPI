import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-repos-list",
  templateUrl: "./repos-list.component.html",
  styleUrls: ["./repos-list.component.scss"]
})
export class ReposListComponent implements OnInit {
  data: string[];
  username = "usergithub12";

  title = "apigithub";
  constructor(private GitApiService: GitApiService) {
    //WORKING PUBLIC REPOSITORIES
    // this.httpClient
    //   .get("https://api.github.com/repositories?since=364")
    //   .subscribe((data: any[]) => {
    //     console.log(data);
    //     this.data = data;
    //   });
    //WORKING USER REPOSITORIES
    this.GitApiService.GetUserRepo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

  getUserRepo() {
    this.GitApiService.GetUserRepo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {}
}
