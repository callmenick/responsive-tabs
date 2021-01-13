# Responsive Tabs

Responsive tab layout with JavaScript and CSS.

## Usage

Markup your HTML like this:

```html
<div id="tabs" class="c-tabs no-js">
  <div class="c-tabs-nav">
    <a href="#" class="c-tabs-nav__link is-active"></a>
    <a href="#" class="c-tabs-nav__link"></a>
    ...
  </div>
  <div class="c-tab is-active">
    <div class="c-tab__content"></div>
  </div>
  <div class="c-tab">
    <div class="c-tab__content"></div>
  </div>
  ...
</div>
```

Include the link to the JS component and instantiate like this:

```html
<script src="js/src/tabs.js"></script>
<script>
  var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });
</script>
```

You can also use `window.tabs` to create a Reponsive Tabs instance.

To initialize it, make sure you run the `init` method:

```javascript
myTabs.init();
```

To go to a specific tab index manually after instantiation, you can use the `goToTab` method which takes an `index` as a parameter. Example:

```javascript
myTabs.goToTab(3);
```

## Advanced usage

### Using custom element

You can also pass an already existing element as an option:

```javascript
var tabsContainer = document.querySelector('#tabs');

var myTabs = window.tabs({
  el: tabsContainer,
  tabNavigationLinks: '.c-tabs-nav__link',
  tabContentContainers: '.c-tab'
});
```

### Multiple instances

Using previous example enables the option to create multiple Responsive Tabs instances of same class on the same page:

```javascript
document.querySelectorAll('.c-tabs').forEach(function (el) {
  var myTabs = window.tabs({
    el: el,
    tabNavigationLinks: '.tab',
    tabContentContainers: '.tab-content'
  });
  myTabs.init();
});
```

### Custom classes for active elements

You can also define your own classes for active tab links and contents to match the desired CSS syntax.

Renaming default `is-active` class using `activeClass` option:

```javascript
var myTabs = tabs({
  el: '#tabs',
  tabNavigationLinks: '.c-tabs-nav__link',
  tabContentContainers: '.c-tab',
  
  activeClass: 'c-tab--active'
});
```

Assigning different classes for tab links and tab contents using `activeClassLink` and `activeClassContainer` options:

```javascript
var myTabs = tabs({
  el: '#tabs',
  tabNavigationLinks: '.c-tabs-nav__link',
  tabContentContainers: '.c-tab',
  
  activeClassLink: 'c-tabs-nav__link--active',
  activeClassContainer: 'c-tab--active'
});
```

## No JS Fallback

Some simple CSS is provided for a no-js solution. If JS is enabled, the `no-js` class gets removed during instantiation and all works well!

## Demo

View the live demo [here.](http://callmenick.com/_development/responsive-tabs/)

## Author

Nick Salloum <nick@callmenick.com>

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
