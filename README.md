## Sass practice 

partials need to be prefixed with a _

example: components/_button.scss

import with: @use 'components/button'

## Folder Structure Breakdown

# base/ 

Styles that effect the global app 

*not component tied styles*

1. _reset.scss *used to reset browser defaults*
2. _typography.scss *global font settings*
3. _base.scss *general html styling*

# components/

Styles tied directly to reusable UI components

1. _button.scss
2. _card.scss
3. _navbar.scss

# layout/

scss that handles the overall structure of the app

*mainly positioning*

1. _header.scss
2. _footer.scss
3. _grid.scss

# utils/

helper funtions and variables used throughout the entire app

1. _variables.scss *colors, spacing values, etc*
2. _mixins.scss *custom scss functions*
3. _functions.scss *example: color mixer*
4. _helpers.scss *utility classes*

# pages/ 

*optional*

mainly used if pages have very unique styles 

1. _home.scss 
2. _about.scss