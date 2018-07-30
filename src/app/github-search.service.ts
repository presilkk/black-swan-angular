import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(
    private http: Http
  ) { }
  repo_url = 'https://api.github.com/search/repositories?q=';
  issue_url = 'https://api.github.com/search/issues?q=repo:';

  searchRepoByName(queryText:string){
    return this.http.get(this.repo_url+queryText).toPromise()
    .then(response => response)
    .catch(err => this.handleError(err))
  }

  getIssues(repoName:string, userid:string){
    return this.http.get(this.issue_url+userid+'/'+repoName).toPromise()
    .then(response => response)
    .catch(err => this.handleError(err))
  }
  private handleError (error) {

      console.error(error); // log to console instead
    };

}
