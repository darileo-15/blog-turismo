var destinore =[];
var personasre = [];
var salidare = [];
var retornore = [];

function guardarDatosReserva (destino, personas, salida, retorno) {
    destinore.push( destino );
    personasre.push( personas );
    salidare.push( salida );
    retornore.push( retorno ); 

    localStorage.setItem ("destino", destinore);
    localStorage.setItem ("personas", personasre);
    localStorage.setItem ("salida", salidare);
    localStorage.setItem ("retorno", retornore);

    onclick (alert ("Su reserva se ha completado exitosamente. Gracias por preferirnos.") );
}

function cargarDatosTabla1 () {    
    document.getElementById ("destinoTabla").write = localStorage.getItem ("destino");
    document.getElementById ("personasTabla").write = localStorage.getItem ("personas");
    document.getElementById ("salidaTabla").write = localStorage.getItem ("salida");
    document.getElementById ("retornoTabla").write = localStorage.getItem ("retorno");
}

cargarDatosTabla1 ();

function gEliminar (destino, personas, salida, retorno) {
    destinore.push( destino );
    personasre.push( personas );
    salidare.push( salida );
    retornore.push( retorno ); 

    localStorage.setItem ("destino", destinore);
    localStorage.setItem ("personas", personasre);
    localStorage.setItem ("salida", salidare);
    localStorage.setItem ("retorno", retornore);

    onclick (alert ("Su reserva se ha cancelado exitosamente.") );
}

function emilinarTabla1 () {    
    document.getElementById ("destinoTabla").write = localStorage.getItem ("destino");
    document.getElementById ("personasTabla").write = localStorage.getItem ("personas");
    document.getElementById ("salidaTabla").write = localStorage.getItem ("salida");
    document.getElementById ("retornoTabla").write = localStorage.getItem ("retorno");
}

elimnarTabla1 ()