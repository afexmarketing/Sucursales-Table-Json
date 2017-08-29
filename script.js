// Code goes here

$(document).ready(function() {
  $('#tablasucursales').DataTable( {
    "language":{

  "sProcessing":     "Procesando...",
  "sLengthMenu":     "Mostrar lista de _MENU_ sucursales",
  "sZeroRecords":    "No se encontraron resultados",
  "sEmptyTable":     "Ning&uacute;n dato disponible en esta tabla",
  "sInfo":           "Mostrando _END_ de _TOTAL_ sucursales",
  "sInfoEmpty":      "Mostrando 0 de 0 sucursales",
  "sInfoFiltered":   "(filtrado de un total de _MAX_ sucursales)",
  "sInfoPostFix":    "",
  "sSearch":         "BUSQUEDA R&Aacute;PIDA",
  "sUrl":            "",
  "sInfoThousands":  ",",
  "sLoadingRecords": "Cargando...",
  "oPaginate": {
    "sFirst":    "Primero",
    "sLast":     "&Uacute;ltimo",
    "sNext":     ">",
    "sPrevious": "<"
  },
  "oAria": {
    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  }

    },
    "ajax":{
      "url":"https://raw.githubusercontent.com/afexmarketing/Maps-AFEX/master/collection.geojson",
      "dataSrc": "features"
    },
    "columns": [
      { data: "properties.title" },
      { data: "properties.description" },
      { data: "properties.tlf" },
      { data: "properties.jefe" },
      { data: "properties.ip" },
      { data: "properties.lunvie" },
      { data: "properties.sab" },
      { data: "properties.dom" }
    ]
  });
});