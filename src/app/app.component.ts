import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { AppService } from './shared/services/app.service';
import { ResponseConfig, AssetConfig, TransformedAssetConfig } from './shared/model/app';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-quickstart';
  @ViewChild('assets') divElement: ElementRef;

  episodes: AssetConfig[] = [];
  transformedAssets: TransformedAssetConfig[] = [];
  private tempEpArray: TransformedAssetConfig[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getEpisodeAssets();
  }

  private getEpisodeAssets() {
    const fileId: number = 1;
    for (let i = fileId; i <= 5; i++) {
      this.appService.getAssetsConfig(i.toString()).subscribe(
        (response: HttpResponse<ResponseConfig>) => {
          this.episodes = response.body.assets;
          this.transformObject();
        },
        (error: any) => {
          console.error(error);
        },
        () => {
        }
      );
    }
  }

  private transformObject() {
    for (const episode of this.episodes) {
      const tempEpisode: TransformedAssetConfig = { episode: _.toInteger(episode.episode), title: episode.title, description: episode.shortDesc };
      const obj = Object.assign(tempEpisode);
      this.tempEpArray.push(obj);
    }
    this.transformedAssets = _.orderBy(this.tempEpArray, ["episode"], ["asc"]);
    this.divElement.nativeElement.innerText = JSON.stringify(this.transformedAssets, null, 8);
  }
}
