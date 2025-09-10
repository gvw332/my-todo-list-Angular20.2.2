import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Composant ItemList
 * Affiche la liste des articles, permet la modification et la suppression.
 */
@Component({
  selector: 'app-item-list', // Balise HTML à utiliser dans le template parent
  imports: [CommonModule, FormsModule],   // Nécessaire pour utiliser @for et [(ngModel)]
  templateUrl: './item-list.html',
  styleUrl: './item-list.scss'
})
export class ItemList {
  /** Liste des articles reçue du parent */
  @Input() items: string[] = [];
  /** Événement envoyé au parent lors de la suppression d'un article */
  @Output() remove = new EventEmitter<string>();

  /** Événement envoyé au parent lors de la modification d'un article */
  @Output() edit = new EventEmitter<{old: string, new: string}>();

  /** Article en cours d'édition */
  editing: string | null = null;
  /** Valeur modifiée de l'article */
  editedValue: string = '';

  /**
   * Passe en mode édition pour l'article sélectionné
   * @param item Article à modifier
   */
  startEdit(item: string) {
    this.editing = item;
    this.editedValue = item;
  }

  /**
   * Valide la modification et envoie l'événement au parent
   * @param item Article à modifier
   */
  saveEdit(item: string) {
    if (this.editedValue.trim() && this.editedValue !== item) {
      this.edit.emit({old: item, new: this.editedValue.trim()});
    }
    this.editing = null;
    this.editedValue = '';
  }

  /**
   * Permet la validation via Entrée ou clic sur le V
   * @param item Article à modifier
   */
  confirmEdit(item: string) {
    this.saveEdit(item);
  }

  /**
   * Annule la modification en cours
   */
  cancelEdit() {
    this.editing = null;
    this.editedValue = '';
  }

  /**
   * Supprime un article après confirmation
   * @param item Article à supprimer
   */
  delete(item: string) {
    if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
      this.remove.emit(item);
    }
  }
}
