/*
//tt.app.factory('Orders', ['$resource', function ($resource, $httpProvider) {
tt.app.factory('Orders', ['$resource', '$cookies', function ($resource, $cookies, $httpProvider) {

  var url = tt.apiUrl + '/repos/' + tt.appRepo + '/contents/data/orders.json';

  return $resource(url, null, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: function(data, headers) {
        var response = JSON.parse(data);
        $cookies.lastSha = response.sha;
        var orders = JSON.parse(window.atob(response.content));
        orders.sort(function(a, b) {
            var x = a.runs[a.runs.length - 1].date;
            var y = b.runs[b.runs.length - 1].date;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        return orders;
      }
    },
    save: {
      method: 'PUT',
      transformRequest: [function(data, headers) {
        //$httpProvider.defaults.headers.common.Authorization = 'token ' + tt.apiToken
        //headers.common.Authorization = 'token ' + tt.apiToken

        var orders = [];
        for(var i = 0; i < data.length; i++){
          orders.push(data[i]);
        }
        orders = JSON.stringify(orders, null, 2);

        return {
          message: $cookies.message,
          committer: {
              name: $cookies.name,
              email: $cookies.email
          },
          content: window.btoa(orders),
          branch: 'master',
          sha: $cookies.lastSha
        };
      }]//.concat($httpProvider.defaults.transformRequest)
    }
  });
}]);
*/