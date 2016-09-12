(function () {
  'use strict';

  angular
    .module('donates')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Donates',
      state: 'donates',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'donates', {
      title: 'List Donates',
      state: 'donates.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'donates', {
      title: 'Create Donate',
      state: 'donates.create',
      roles: ['user']
    });
  }
}());
