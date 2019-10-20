import { Component, OnInit, Input } from "@angular/core";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-followers-list",
  templateUrl: "./followers-list.component.html",
  styleUrls: ["./followers-list.component.scss"]
})
export class FollowersListComponent implements OnInit {
  data: string[];
  username: string;
  @Input() user: string;
  constructor(private GitApiService: GitApiService) {}
  getUserFollowers() {
    this.GitApiService.GetUserFollowers(this.user).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {
    console.log("Got USer in followers!", this.user);
    this.GitApiService.GetUserFollowers(this.user).subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }
}
