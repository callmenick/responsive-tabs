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

To initialize it, make sure you run the `init` method:

```javascript
myTabs.init();
```

To go to a specific tab index manually after instantiation, you can use the `goToTab` method which takes an `index` as a parameter. Example:

```javascript
myTabs.goToTab(3);
```

## No JS Fallback

Some simple CSS is provided for a no-js solution. If JS is enabled, the `no-js` class gets removed during instantiation and all works well!

## Demo

View the live demo [here.](http://callmenick.com/_development/responsive-tabs/)

## Author

Nick Salloum <nick@callmenick.com>

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
