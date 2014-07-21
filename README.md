Simple Require
==============

Stupidly simple method of preloading javascript files in development

Usage
-----

1. Reference require.js before all other script tags in your HEAD

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

2. Require your javascript files in the order you'd like them to be loaded

    // JAVASCRIPT_ROOT = 'js/'; // Optional path to your javascript files (default is 'javascript/')

    require('base.js', 'events.js');

    window.onload = function() {
      console.log('DOM', 'loaded');
    }