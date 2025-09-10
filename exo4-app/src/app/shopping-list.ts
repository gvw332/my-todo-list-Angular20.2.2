import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingList {
  private readonly storageKey = 'shopping-list';
  private itemsSubject = new BehaviorSubject<string[]>(this.load());

  get items$(): Observable<string[]> {
    return this.itemsSubject.asObservable();
  }

  add(item: string) {
    const current = this.itemsSubject.value;
    if (item && !current.includes(item)) {
      const updated = [...current, item];
      this.itemsSubject.next(updated);
      this.save(updated);
    }
  }

  remove(item: string) {
    const updated = this.itemsSubject.value.filter(i => i !== item);
    this.itemsSubject.next(updated);
    this.save(updated);
  }

  private save(list: string[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  private load(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
