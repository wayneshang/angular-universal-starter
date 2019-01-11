import { Component, OnInit, Inject, PLATFORM_ID , ViewEncapsulation} from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { MetaService } from '@ngx-meta/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'zorro-test',
  templateUrl: './zorro-test.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ZorroTestComponent implements OnInit {
    inputValue: string;
    options: any[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: TransferHttpService,
    private readonly meta: MetaService,
    private universalStorage: UniversalStorage,
  ) {}

  ngOnInit(): void {
      let resultCookie = this.universalStorage.getItem('test');
      console.log('home resultCookie 0:', resultCookie);

      this.universalStorage.setItem('test', 'test2');
      resultCookie = this.universalStorage.getItem('test');
      console.log('home resultCookie 1:', resultCookie);
      const t = window;
      const t1 = document;
      this.meta.setTag('description', 'Meta update from init');
  }

  onChange(value: string): void {
    this.options = new Array(this.getRandomInt(15, 5)).join('.').split('.')
    .map((item, idx) => ({
      value,
      category: `${value}${idx}`,
      count: this.getRandomInt(200, 100),
    }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
