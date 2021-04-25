import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.storage.create().then(() => {
    });
  }

  public set(settingName, value) {
    return this.storage.set(`${settingName}`, value);
  }
  public async get(settingName) {
    return await this.storage.get(`${settingName}`);
  }
  public async remove(settingName) {
    return await this.storage.remove(`${settingName}`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
