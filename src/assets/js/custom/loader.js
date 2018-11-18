function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
  domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}

if (!browserSupportsCSSProperty('animation')) {
  $('.bounce1, .bounce2, .bounce3').hide();
  $('.spinner').css({
    'background':'transparent url(https://dl.dropboxusercontent.com/u/11510916/fiddles/spinkit/spinner-fallback.gif) no-repeat',
    'background-size':'70% 70%',
    'height':'70px'
  });
}