# Simple Require

Stupidly simple method of preloading javascript files in development

## Usage

### Reference require.js before all other script tags in your HEAD

    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Require</title>
      <script type="text/javascript" src="js/vendor/require.js"></script>
      <script type="text/javascript" src="js/app.js"></script>
    </head>
    <body>

    </body>
    </html>

### Require your javascript files in the order you'd like them to be loaded

    // JAVASCRIPT_ROOT = 'javascript/'; // Optional path to your javascript files (default is 'js/')

    require('base.js', 'events.js');

    window.onload = function() {
      console.log('DOM', 'loaded');
    }
