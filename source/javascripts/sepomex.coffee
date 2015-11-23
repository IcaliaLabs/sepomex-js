class Sepomex

  BASE_URL = "http://sepomex.icalialabs.com/api/v1/zip_codes"

  constructor: (attributes) ->
    @id = attributes.id
    @d_codigo = attributes.d_codigo
    @d_asenta = attributes.d_asenta
    @d_tipo_asenta = attributes.d_tipo_asenta
    @d_mnpio = attributes.d_mnpio
    @d_estado = attributes.d_estado
    @d_ciudad = attributes.d_ciudad
    @d_cp = attributes.d_cp
    @c_estado = attributes.c_estado
    @c_oficina = attributes.c_oficina
    @c_cp = attributes.d_cp
    @c_tipo_asenta = attributes.c_tipo_asenta
    @c_mnpio = attributes.c_mnpio
    @id_asenta_cpcons = attributes.id_asenta_cpcons
    @d_zona = attributes.d_zona
    @c_cve_ciudad = attributes.c_cve_ciudad

  @where: (params = {}, callback) ->
    response = new Array

    $.ajax(
      url: BASE_URL
      dataType: 'json'
      type: 'GET'
      data: params
      success: (data) ->
        zip_codes = data.zip_codes
        for code_attributes in zip_codes
          response.push new Sepomex(code_attributes)
        callback(response) if callback
      error: (data) ->
        callback(response) if callback
    )

    response
