JAVASCRIPT_ROOT = 'javascript/';

require = function() {
  var imports = arguments;
  var count = imports.length;
  for (i = 0; i < count; i++) {
    script = document.createElement('script');
    script.src = JAVASCRIPT_ROOT + imports[i];
    document.head.appendChild(script);
  }
}