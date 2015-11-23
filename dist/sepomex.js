var Sepomex;

Sepomex = (function() {
  var BASE_URL;

  BASE_URL = "http://sepomex.icalialabs.com/api/v1/zip_codes";

  function Sepomex(attributes) {
    this.id = attributes.id;
    this.d_codigo = attributes.d_codigo;
    this.d_asenta = attributes.d_asenta;
    this.d_tipo_asenta = attributes.d_tipo_asenta;
    this.d_mnpio = attributes.d_mnpio;
    this.d_estado = attributes.d_estado;
    this.d_ciudad = attributes.d_ciudad;
    this.d_cp = attributes.d_cp;
    this.c_estado = attributes.c_estado;
    this.c_oficina = attributes.c_oficina;
    this.c_cp = attributes.d_cp;
    this.c_tipo_asenta = attributes.c_tipo_asenta;
    this.c_mnpio = attributes.c_mnpio;
    this.id_asenta_cpcons = attributes.id_asenta_cpcons;
    this.d_zona = attributes.d_zona;
    this.c_cve_ciudad = attributes.c_cve_ciudad;
  }

  Sepomex.where = function(params, callback) {
    var response;
    if (params == null) {
      params = {};
    }
    response = new Array;
    $.ajax({
      url: BASE_URL,
      dataType: 'json',
      type: 'GET',
      data: params,
      success: function(data) {
        var code_attributes, zip_codes, _i, _len;
        zip_codes = data.zip_codes;
        for (_i = 0, _len = zip_codes.length; _i < _len; _i++) {
          code_attributes = zip_codes[_i];
          response.push(new Sepomex(code_attributes));
        }
        if (callback) {
          return callback(response);
        }
      },
      error: function(data) {
        if (callback) {
          return callback(response);
        }
      }
    });
    return response;
  };

  return Sepomex;

})();
