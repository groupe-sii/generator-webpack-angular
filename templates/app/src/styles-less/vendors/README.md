# Vendors

The `vendors/` folder contains all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on.

* `_normalize.less`
* `_bootstrap.less`
* `_jquery-ui.less`
* `_select2.less`

If you have to override a section of any vendor, you should have another folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_bootstrap.less` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

## Structure

```
styles/
|
|– vendors/
|   |– _bootstrap.less    # Bootstrap
|   |– _jquery-ui.less    # jQuery UI
|   …                     # Etc.
```

## Source

Source (SASS guidelines applied to LESS):

[https://sass-guidelin.es](https://sass-guidelin.es/?utm_source=CSS-Weekly&utm_campaign=Issue-145&utm_medium=RSS#architecture)
