import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Course Works List';

  constructor(private _titleService: Title) {
    this._titleService.setTitle(this.title);
  }
}
