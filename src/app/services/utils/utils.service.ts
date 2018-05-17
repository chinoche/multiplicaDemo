import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  removeUrlParams(urlWithParams) {
    let url = urlWithParams.replace(/ *\{[^)]*\} */g, '');
    return url;
  }

}
