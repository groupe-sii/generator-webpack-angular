# Configuration

Angular documentation is generated with [DGeni](https://github.com/angular/dgeni)

Please refer to [Angular documentation](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) for doc's comments generation.

### Configuration

Generator is found under `./tools/docs-generator`. 

It's possible to include or exclude other glob link (default: `./src/app/**/*`) in file `./tools/docs-generator/config/index.js`.

You can also configure generation path with `destPath` variable under `./tools/docs-generator/index.js`

###Static documentation

Static documentation is written in markdown format under `./docs`
