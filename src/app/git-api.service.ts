import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GitApiService {
  private REST_API_SERVER = "https://api.github.com/";

  constructor(private httpClient: HttpClient) {}

  public GetUserRepo(username) {
    return this.httpClient.get(
      "https://api.github.com/users/" + username + "/repos"
    );
  }
}
