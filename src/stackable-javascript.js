class Stackable {
  constructor(token) {
    this._token = token;
    this._apiUrl = 'http://api.stackable.space/v1/';
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
    $.ajax({
      url: this._apiUrl + path + '?token=' + this._token,
      context: document.body,
      success: function(result) {
        callback(null, result);
      },
      error: function(err) {
        callback(err, null);
      }
    });
  }
}

module.exports = Stackable;
