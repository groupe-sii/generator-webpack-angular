# Layout

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar...), the grid system or even CSS styles for all the forms.

* `_grid.less`
* `_header.less`
* `_footer.less`
* `_sidebar.less`
* `_forms.less`
* `_navigation.less`

The `layout/` folder might also be called `partials/`, depending on what you prefer.

## Structure

```
styles/
|
|– layout/
|   |– _navigation.less   # Navigation
|   |– _grid.less         # Grid system
|   |– _header.less       # Header
|   |– _footer.less       # Footer
|   |– _sidebar.less      # Sidebar
|   |– _forms.less        # Forms
|   …                     # Etc.
```

## Source

Source (SASS guidelines applied to LESS):

[https://sass-guidelin.es](https://sass-guidelin.es/?utm_source=CSS-Weekly&utm_campaign=Issue-145&utm_medium=RSS#architecture)
