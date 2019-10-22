import { Component, OnInit, Input } from "@angular/core";
import { GitApiService } from "../git-api.service";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  // user: string[];
  @Input() username: string;
  @Input() user: string[];
  constructor(private GitApiService: GitApiService) {
    // this.getUserInfo();
  }

  ngOnInit() {}

  getUserInfo() {
    this.GitApiService.GetUserInfo(this.username).subscribe((data: any[]) => {
      console.log(data);
      this.user = data;
    });
  }
}
