class Stackable {
  constructor(token) {
    this._token = token;
    this._apiVersion = 'v1';
    this._apiUrl = 'http://api.stackable.space';
  }

  getContainers(callback) {
    this._get('containers', function(err, res) {
      callback(err, res);
    });
  }

  getContainer(containerId, callback) {
    this._get(`containers/${containerId}`, function(err, res) {
      callback(err, res);
    });
  }

  getContainerItems(containerId, callback) {
    this._get(`containers/${containerId}/items`, function(err, res) {
      callback(err, res);
    });
  }

  getAllItem(callback) {
    this._get(`items`, function(err, res) {
      callback(err, res);
    });
  }

  getItem(itemId, callback) {
    this._get(`items/${itemId}`, function(err, res) {
      callback(err, res);
    });
  }

  _get(path, callback) {
    let endPoint = `${this._apiUrl}/${this._apiVersion}/${path}?token=${this._token}`;

    if (typeof window === 'undefined') {
      //is node
      fetch(endPoint)
        .then(function(response) {
          if (response.status >= 400) {
            let err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        })
        .then(function(response) {
          return callback(false, response);
        });
    } else {
      //is browser
      $.ajax({
        url: endPoint,
        context: document.body,
        success: function(response) {
          callback(false, response);
        },
        error: function(err) {
          callback(err, false);
        }
      });
    }
  }
}

module.exports = Stackable;
