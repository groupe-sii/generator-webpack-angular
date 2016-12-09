# Base

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call `_base.scss`).

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

If your project uses a lot of CSS animations, you might consider adding an `\_animations.scss` file in there containing the @keyframes definitions of all your animations. If you only use a them sporadically, let them live along the selectors that use them.

## Structure

```
styles/
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
```

## Source

[https://sass-guidelin.es](https://sass-guidelin.es/?utm_source=CSS-Weekly&utm_campaign=Issue-145&utm_medium=RSS#architecture)
