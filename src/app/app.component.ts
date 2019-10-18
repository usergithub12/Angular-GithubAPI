import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  data: string[];
  username: string;

  title = "apigithub";
  constructor(private httpClient: HttpClient) {
    //WORKING PUBLIC REPOSITORIES
    // this.httpClient
    //   .get("https://api.github.com/repositories?since=364")
    //   .subscribe((data: any[]) => {
    //     console.log(data);
    //     this.data = data;
    //   });
    //WORKING USER REPOSITORIES
    this.httpClient
      .get("https://api.github.com/users/usergithub12/repos")
      .subscribe((data: any[]) => {
        console.log(data);
        this.data = data;
      });
  }

  getUserRepo() {
    this.httpClient
      .get("https://api.github.com/users/" + this.username + "/repos")
      .subscribe((data: any[]) => {
        console.log(data);
        this.data = data;
      });
  }
}
