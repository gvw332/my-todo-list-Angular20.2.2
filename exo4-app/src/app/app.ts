import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItem } from './add-item/add-item';
import { ItemList } from './item-list/item-list';
import { ShoppingList } from './services/shopping-list';
import { UppercasePipe } from './pipes/uppercase-pipe';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddItem, ItemList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

/**
 * Composant principal App
 * Orchestration de l'application, gestion du thème, de la recherche et des interactions globales.
 */
export class App {
  /** Texte de recherche pour filtrer la liste */
  search: string = '';
  /** Liste filtrée selon la recherche */
  filteredItems: string[] = [];
  /** Message de succès */
  success: string | null = null;
  /** Message d'erreur */
  error: string | null = null;

  /** Indique si le mode sombre est activé */
  isDarkMode: boolean = false;

  /**
   * Bascule le thème jour/nuit en ajoutant la classe CSS sur html et body
   */
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const html = document.documentElement;
    const body = document.body;
    if (this.isDarkMode) {
      html.classList.add('dark-mode');
      body.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
    }
  }

  /**
   * Initialise le composant et s'abonne à la liste d'articles du service
   */
  constructor(public shoppingList: ShoppingList) {
    this.shoppingList.items$.subscribe(items => {
      this.filterItems(items);
    });
  }

  /**
   * Ajoute un article à la liste via le service
   * @param item Article à ajouter
   */
  addItem(item: string) {
    if (this.filteredItems.includes(item)) {
      this.error = "Cet article existe déjà.";
      this.success = null;
      return;
    }
    this.shoppingList.add(item);
    this.success = "Article ajouté avec succès !";
    this.error = null;
    setTimeout(() => this.success = null, 2000);
  }

  /**
   * Supprime un article de la liste via le service
   * @param item Article à supprimer
   */
  removeItem(item: string) {
    this.shoppingList.remove(item);
    this.success = null;
  }

  /**
   * Modifie un article (remplace l'ancien par le nouveau)
   * @param event Objet contenant l'ancien et le nouvel article
   */
  editItem(event: {old: string, new: string}) {
    if (this.filteredItems.includes(event.new)) {
      this.error = "Cet article existe déjà.";
      this.success = null;
      return;
    }
    this.shoppingList.remove(event.old);
    this.shoppingList.add(event.new);
    this.success = "Article modifié !";
    this.error = null;
    setTimeout(() => this.success = null, 2000);
  }

  /**
   * Filtre la liste selon la recherche
   * @param items Liste d'articles à filtrer
   */
  filterItems(items: string[]) {
    const query = this.search.toLowerCase();
    this.filteredItems = !query
      ? items
      : items.filter(i => i.toLowerCase().includes(query));
  }

    onSearchChange() {
      this.shoppingList.items$.subscribe(items => {
        this.filterItems(items);
      });
    }
  }
