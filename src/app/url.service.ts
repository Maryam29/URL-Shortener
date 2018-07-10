import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class URLService {
    countries: any[] = new Array();
    constructor(private http: Http) { }

    GenerateShortenedURL(originalUrl) {
        const domain = this.getDomain(originalUrl);
        const longurl = 'https://' + 'www.' + domain;
        return this.http.post('getURLshortened', {originalUrl: longurl}).pipe(map(res => {
            if (res.status === 400) {
                throw new Error('Couldn\'t Generate Short URL');
            } else {
                return res.json();
            }
        }));
    }

    getDomain(originalUrl) {
        const prefix = /^https?:\/\//;
        const prefix2 = /^www./;
        const domain = /^[^\/:]+/;
    // remove any prefix
    originalUrl = originalUrl.replace(prefix, '');
    originalUrl = originalUrl.replace(prefix2, '');
    // assume any URL that starts with a / is on the current page's domain
    if (originalUrl.charAt(0) === '/') {
        originalUrl = window.location.hostname + originalUrl;
    }
    return originalUrl;
      // now extract just the domain
    // const match = originalUrl.match(domain);
    // if (match) {
    //     return(match[0]);
    // }
    // return(null);
    }

    GetAllURLs() {
        return this.http.get('getAllURLs').pipe(map(res => {
            if (res.status === 400) {
                throw new Error('Couldn\'t get form controls');
            } else {
                return res.json();
            }
        }));
    }

    FetchOriginalURL(shorturl) {
        return this.http.post('fetchOriginalURL', {shorturl}).pipe(map(res => {
            if (res.status === 400) {
                throw new Error('Couldn\'t Generate Short URL');
            } else {
                return res.json();
            }
        }));
    }

    DeleteURLs(Objectids) {
        return this.http.post('deleteURLs', {ObjectIds: Objectids}).pipe(map(res => {
            if (res.status === 400) {
                throw new Error('Couldn\'t delete URLs');
            } else {
                return res.json();
            }
        }));
    }


}
