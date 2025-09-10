import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe personnalisée UppercasePipe
 * Transforme une chaîne de caractères en majuscules pour l'affichage dans le template.
 */
@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  /**
   * Transforme la valeur en majuscules si c'est une chaîne
   * @param value Valeur à transformer
   * @returns La valeur transformée ou inchangée
   */
  transform(value: unknown): unknown {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}
