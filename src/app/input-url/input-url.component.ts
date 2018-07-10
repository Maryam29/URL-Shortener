import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { URLService } from '../url.service';
import { FileUploadClientService} from '../file-client.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.css']
})
export class InputURLComponent implements OnInit {
  longurl: string;
  shorturl = '';
  allurls: any[];
  isChecked: boolean[];

  constructor(private URLservice: URLService, private route: ActivatedRoute, private router: Router,
    private fileuploadclientservice: FileUploadClientService) { }

  ngOnInit() {
    this.allurls = new Array();
    this.GetAllURLs();
  }

  GetAllURLs() {
    this.URLservice.GetAllURLs().subscribe(res => {
      if (res) {
        this.allurls = res;
        this.isChecked = new Array(this.allurls.length).fill(false);
      }
    });
  }
  onShortenURL() {
    this.URLservice.GenerateShortenedURL(this.longurl).subscribe(res => {
      if (res) {
        // console.log(this.router.url);
        this.shorturl = res.ShortURL;
        this.GetAllURLs();
        this.isChecked = new Array(this.allurls.length).fill(false);
      }
    });
  }

  ToggleSelection(j) {
    this.isChecked[j] = ! this.isChecked[j];
  }

  DeleteURLs() {
    const Objects = new Array();
    for (let j = 0; j < this.allurls.length; j++) {
      if (this.isChecked[j]) {
        Objects.push(this.allurls[j]);
      }
    }
    if (Objects.length > 0) {
      this.URLservice.DeleteURLs(Objects).subscribe((res) => {
        console.log(res);
        if (res.n > 0 ) {
          this.GetAllURLs();
      }
    });
  }
}


changeListener(files: FileList) {
  if (files && files.length > 0) {
     const file: File = files.item(0);
      //  console.log(file.name);
      //  console.log(file.size);
      //  console.log(file.type);
       const reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          const csv: string = reader.result;
          const allTextLines = csv.split(/\r?\n|\r/);
          console.log(allTextLines.length);
          for ( let i = 0; i < allTextLines.length; i++) {
            const data = allTextLines[i].split(',');
            console.log(data[0]);
            if (data[0] !== '') {
              this.URLservice.GenerateShortenedURL(data[0]).subscribe(res => {
                if (res) {
                  this.GetAllURLs();
                  this.isChecked = new Array(this.allurls.length).fill(false);
                }
              });
            }
          }
       };
    }
}

}

