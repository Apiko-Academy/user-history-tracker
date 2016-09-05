var strLocation,
intIntervalTime = 100;

var fnCheckLocation = function(){
  // Check to see if the location has changed.
  if (strLocation != window.location.href){
    strLocation = window.location.href;

    addQueryToLinks( generateNewQuery(strLocation) );
  }
}

var generateNewQuery = function(href) {
  var parser = document.createElement('a');
  parser.href = href;

  var query = parser.search;
  var newQuery= query ? query : '?';

  // returns object with query parameters
  var parseQueryToObj = function( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }

    return params;
  };

  var parsedQuery = parseQueryToObj(query.substring(1));

  // generate new query according to existing
  if(parsedQuery['currPath_1'] === undefined) {
    newQuery += 'currPath_1=' + parser.pathname.substring(1)
  } else {
    // if we have some queries
    newQuery += '&currPath_' + (Object.keys(parsedQuery).length + 1) +
    '=' + parser.pathname.substring(1)
  }
  return newQuery;
}

var addQueryToLinks = function(queryToAdd) {
  $(function(){
    $('a').each(function() {
      if(!this.hash && (
        this.hostname === 'jssolutionsdev.com' ||
        this.hostname === 'blog.jssolutionsdev.com') )
        {
          var urlWithoutQuery = this.href.split(/[?#]/)[0];
          $(this).attr('href', urlWithoutQuery + queryToAdd);
        }
      });
    });
  }

  // First load check
  fnCheckLocation();
  // Handle url changes
  setInterval( fnCheckLocation, intIntervalTime );
