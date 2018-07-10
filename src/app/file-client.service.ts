import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FileUploadClientService {
  constructor(private http: Http) { }


  uploadDatasource(payload): Observable<any[]> {
    const headers = new Headers();

    headers.append('Accept', 'application/json, text/plain,');
    const options = new RequestOptions({ headers: headers });


    return this.http.post(`API_UPLOAD_PATH`, payload, options).pipe(
        map((res: Response) => {
            const data = res.json();
            return data;
          }));
  }
}
