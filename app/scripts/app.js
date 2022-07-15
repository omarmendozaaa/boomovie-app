(function() {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'home': '/',
      'detail': '/movies',
      'movie': '/movie/:id',
      'categories': '/categories',
      'categorie': '/categorie/:id'
    }
  });
}());
