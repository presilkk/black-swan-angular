import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubSearchService, BsModalService]
})
export class SearchComponent implements OnInit {

  constructor(
    private _githubSearchService: GithubSearchService,
    private modalService: BsModalService,
    private _spinService: SlimLoadingBarService
  ) { }
  public modalRef: BsModalRef; // {1}
  search_name: string;
  response_data;
  repository_items: any[];
  cols: any[];
  issues: any[];
  issue_data;
  issue_loading: boolean;
  repo_loading: boolean;
  isPaginatorVisible: boolean;
  issue_name: "";
  
  ngOnInit() {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'state', header: 'Status' },
      { field: 'comments', header: 'Comments Count' }
  ];
  }

  searchRepo(){
    this.isPaginatorVisible = false;
    this._spinService.start();
    setTimeout(() => {
      this._githubSearchService.searchRepoByName(this.search_name).then((response)=> {
        this.response_data = JSON.parse(response['_body']);
        this.repository_items = this.response_data['items'];
        if(this.repository_items.length > 0){
          this.isPaginatorVisible = true;
          this._spinService.complete()
        }
        });
    }, 1000);
    

  }

  openModal(event,template, item){
    event.preventDefault()
    this._spinService.start();
    this.issue_name = item.name;
    setTimeout(() => {
      this._githubSearchService.getIssues(item.name, item.owner.login).then((response)=> {
        this.issue_data = JSON.parse(response['_body']);
        this.issues = this.issue_data['items'];
        this.issue_loading = false;
        this._spinService.complete()
        this.modalRef = this.modalService.show(template);
      })
    }, 1000);
    
  }
}
