import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LocalStorageService {

	constructor( @Inject(PLATFORM_ID) private platformId: Object ) {
  }

	getItem(key:string) {
		if (isPlatformBrowser(this.platformId)) {
			return window.localStorage.getItem(key);
		}
	}

	setItem(key:string, value:any) {
		if (isPlatformBrowser(this.platformId)) {
			 window.localStorage.setItem(key,  JSON.stringify(value));
		}
	}
}


