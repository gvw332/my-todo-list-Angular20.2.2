import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Composant AddItem
 * Permet à l'utilisateur d'ajouter un nouvel article à la liste.
 */
@Component({
  selector: 'app-add-item', // Balise HTML à utiliser dans le template parent
  imports: [FormsModule, CommonModule],   // Nécessaire pour utiliser [(ngModel)]
  templateUrl: './add-item.html',
  styleUrl: './add-item.scss'
})
export class AddItem {
  /** Événement envoyé au parent lors de l'ajout d'un article */
  @Output() add = new EventEmitter<string>();
  /** Variable liée à l'input texte */
  item: string = '';
  /** Message d'erreur si le champ est vide */
  error: string | null = null;

  /**
   * Ajoute l'article saisi (via Entrée ou clic sur le bouton)
   */
  addItem() {
    const value = this.item.trim();
    if (!value) {
      this.error = "Veuillez entrer un article.";
      return;
    }
    this.add.emit(value);
    this.item = '';
    this.error = null;
  }

  /**
   * Méthode appelée au clic sur le bouton "Ajouter"
   */
  submit() {
    this.addItem();
  }
}
