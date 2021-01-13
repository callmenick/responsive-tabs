(function() {

    'use strict';

    /**
     * tabs
     *
     * @description The Tabs component.
     * @param {Object} options The options hash
     */
    var tabs = function(options) {

        var el = options.hasOwnProperty('el') ? parseElement(options.el) : false;
        if (el === false) {
            console.error('[Responsive Tabs] Option "el" is not defined');
            return;
        }
        else if (!el) {
            console.error('[Responsive Tabs] Failed to find an element of selector:', options.el);
            return;
        }
        var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
        var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
        var activeClass = options.hasOwnProperty('activeClass') ? options.activeClass : 'is-active';
        var activeClassLink = options.hasOwnProperty('activeClassLink') ? options.activeClassLink : activeClass;
        var activeClassContainer = options.hasOwnProperty('activeClassContainer') ? options.activeClassContainer : activeClass;
        var activeIndex = 0;
        var initCalled = false;

        /**
         * init
         *
         * @description Initializes the component by removing the no-js class from
         *   the component, and attaching event listeners to each of the nav items.
         *   Returns nothing.
         */
        var init = function() {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (var i = 0; i < tabNavigationLinks.length; i++) {
                    var link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        /**
         * parseElement
         *
         * @description Parses option that can be of different types
         * @param el {Element|string}
         * @returns {Element}
         */
        function parseElement(el) {
            if (el instanceof Element) {
                return el;
            }
            else if (typeof el === 'string') {
                return document.querySelector(el);
            }
        }

        /**
         * handleClick
         *
         * @description Handles click event listeners on each of the links in the
         *   tab navigation. Returns nothing.
         * @param {HTMLElement} link The link to listen for events on
         * @param {Number} index The index of that link
         */
        var handleClick = function(link, index) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        /**
         * goToTab
         *
         * @description Goes to a specific tab based on index. Returns nothing.
         * @param {Number} index The index of the tab to go to
         */
        var goToTab = function(index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove(activeClassLink);
                tabNavigationLinks[index].classList.add(activeClassLink);
                tabContentContainers[activeIndex].classList.remove(activeClassContainer);
                tabContentContainers[index].classList.add(activeClassContainer);
                activeIndex = index;
            }
        };

        /**
         * Returns init and goToTab
         */
        return {
            init: init,
            goToTab: goToTab
        };

    };

    /**
     * Attach to global namespace
     */
    window.tabs = tabs;

})();
