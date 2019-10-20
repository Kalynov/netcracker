class Navigation {
  constructor() {
    const navBar = document.createElement('div'),
      buttonWrap = document.createElement('input'),
      button = document.createElement('label'),
      list = document.createElement('nav'),
      navItems = ['news', 'profile', 'messages', 'settings'];

    navBar.className = 'nav-bar';
    document.body.append(navBar);

    buttonWrap.className = 'nav-bar__button-wrap';
    buttonWrap.type = 'checkbox';
    buttonWrap.name = 'button';
    buttonWrap.id = 'button';
    navBar.append(buttonWrap);

    button.className = 'nav-bar__button';
    button.htmlFor = 'button';
    button.innerText = 'Menu';
    navBar.append(button);

    list.className = 'nav-bar__list';
    navBar.append(list);

    navItems.forEach(item => {
      const listItem = document.createElement('div');
      listItem.className = 'nav-bar__item';
      listItem.innerText = item;
      list.append(listItem);
    });
  }
};

let navigation = new Navigation();
