import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { URLService } from '../url.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortURLComponent implements OnInit {
  OriginalURL: string;
  constructor(private URLservice: URLService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!_.isEmpty(params)) {
        this.URLservice.FetchOriginalURL(params['shorturl']).subscribe((res) => {
          if (res.length > 0) {
            this.OriginalURL = res[0].OriginalURL;
            console.log(this.OriginalURL);
            window.location.href = this.OriginalURL;
            // this.router.navigate([this.OriginalURL]);
          }
          });
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
