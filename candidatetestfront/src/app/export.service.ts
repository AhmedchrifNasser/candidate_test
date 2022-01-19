import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private http: HttpClient) { }

  createjsondoc(data:any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/document/',JSON.stringify(data))
  }
}
