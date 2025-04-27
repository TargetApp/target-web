import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    set(key: string, value: string): boolean {
        if (this.storage) {
            this.storage.setItem(key, value);
            return true;
        }

        return false;
    }

    get(key: string): any {
        if (this.storage) {
            var value = this.storage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
            return null;
        }

        return null;
    }

    remove(key: string): boolean {
        if (this.storage) {
            this.storage.removeItem(key);
            return true;
        }

        return false;
    }

    clear(): boolean {
        if (this.storage) {
            this.storage.clear();
            return true;
        }

        return false;
    }
}
