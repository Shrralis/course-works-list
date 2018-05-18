import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { DataService } from '../_service/data.service';
import { Group } from '../shared/_model/group';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  private groups: Group[];
  private currentGroup: Group;

  constructor(private breakpointObserver: BreakpointObserver,
              private _titleService: Title,
              private _dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    console.log('test');
    this._dataService.getData()
      .subscribe(data => {
        this.groups = data;

        this.groups.sort(((a, b) => a.name > b.name ? 1 : -1));
        this.groups.forEach(g => {
          g.students.sort(((a, b) => a.name > b.name ? 1 : -1));
        });

        if (this.groups.length) {
          this.currentGroup = this.groups[0];
        }
      });
  }

  private chooseGroup(group: Group): void {
    this.currentGroup = group;
  }
}
