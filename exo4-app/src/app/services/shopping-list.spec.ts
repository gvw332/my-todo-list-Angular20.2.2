import { ShoppingList } from './shopping-list';

describe('ShoppingList Service', () => {
  let service: ShoppingList;

  beforeEach(() => {
    service = new ShoppingList();
    // Nettoyage du localStorage pour éviter les effets de bord
    localStorage.clear();
  });

  it('devrait initialiser la liste vide', () => {
    service.items$.subscribe(items => {
      expect(items.length).toBe(0);
    });
  });

  it('devrait ajouter un article', () => {
    service.add('pain');
    service.items$.subscribe(items => {
      expect(items).toContain('pain');
    });
  });

  it('devrait supprimer un article', () => {
    service.add('lait');
    service.remove('lait');
    service.items$.subscribe(items => {
      expect(items).not.toContain('lait');
    });
  });
});
