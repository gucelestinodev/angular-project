import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly canUseStorage: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.canUseStorage = isPlatformBrowser(platformId) && typeof localStorage !== 'undefined';
  }

  getItem(key: string): string | null {
    return this.canUseStorage ? localStorage.getItem(key) : null;
  }

  setItem(key: string, value: string) {
    if (this.canUseStorage) localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    if (this.canUseStorage) localStorage.removeItem(key);
  }
}
