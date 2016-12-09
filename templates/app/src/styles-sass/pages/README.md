# Pages

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

* `_home.scss`
* `_contact.scss`

Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.

## Structure

```
styles/
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
```

## Source

[https://sass-guidelin.es](https://sass-guidelin.es/?utm_source=CSS-Weekly&utm_campaign=Issue-145&utm_medium=RSS#architecture)
