import { Component, OnInit, Input } from "@angular/core";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-repos-list",
  templateUrl: "./repos-list.component.html",
  styleUrls: ["./repos-list.component.scss"]
})
export class ReposListComponent implements OnInit {
  data: string[];
  @Input() username: string;
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
}
