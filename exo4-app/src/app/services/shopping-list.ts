
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service ShoppingList
 * Gère la liste d'achats, la persistance (localStorage) et la communication réactive avec les composants.
 */
@Injectable({
  providedIn: 'root'
})
export class ShoppingList {
  /** Clé utilisée pour stocker la liste dans le localStorage du navigateur */
  private readonly storageKey = 'shopping-list';

  /**
   * Comportement réactif : contient la liste des articles et permet aux composants de s'abonner aux changements
   */
  private itemsSubject = new BehaviorSubject<string[]>(this.load());

  /** Observable de la liste d'articles, à utiliser dans les composants */
  get items$(): Observable<string[]> {
    return this.itemsSubject.asObservable();
  }

  /**
   * Ajoute un article à la liste si il n'existe pas déjà
   * @param item Article à ajouter
   */
  add(item: string) {
    const current = this.itemsSubject.value;
    if (item && !current.includes(item)) {
      const updated = [...current, item];
      this.itemsSubject.next(updated);
      this.save(updated);
    }
  }

  /**
   * Supprime un article de la liste
   * @param item Article à supprimer
   */
  remove(item: string) {
    const updated = this.itemsSubject.value.filter(i => i !== item);
    this.itemsSubject.next(updated);
    this.save(updated);
  }

  /**
   * Sauvegarde la liste dans le localStorage
   * @param list Liste à sauvegarder
   */
  private save(list: string[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  /**
   * Charge la liste depuis le localStorage
   * @returns Liste d'articles ou tableau vide
   */
  private load(): string[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
