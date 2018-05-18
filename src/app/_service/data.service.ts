import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerResponse } from '../shared/_model/system/server-response.model';
import { Group } from '../shared/_model/group';
import { DATA_FILE_URL } from '../shared/endpoints';

@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {
  }

  public getData(): Observable<Group[]> {
    return this._http.get(DATA_FILE_URL)
      .pipe(map(response => (response as ServerResponse<Group>).payload));
  }
}
