# Base

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call `_base.less`).

* `_base.less`
* `_reset.less`
* `_typography.less`

If your project uses a lot of CSS animations, you might consider adding an `_animations.less` file in there containing the `@keyframes` definitions of all your animations. If you only use them sporadically, let them live along the selectors that use them.

## Structure

```
styles/
|
|– base/
|   |– _reset.less        # Reset/normalize
|   |– _typography.less   # Typography rules
|   …                     # Etc.
```

## Source

Source (SASS guidelines applied to LESS):

[https://sass-guidelin.es](https://sass-guidelin.es/?utm_source=CSS-Weekly&utm_campaign=Issue-145&utm_medium=RSS#architecture)
