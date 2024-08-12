
//Variable Globales
var precioMasMovil = 0;
var monto10GB = 0;
var monto35GB = 0;
var monto60GB = 0;
var precioServicio = 0;


function calcularMovil() {
    // Variables 
    let mensajeMasMovil = '';

    // Condicionales para determinar la tarifa seleccionada
    if (document.getElementById('movil60GB').checked) {
        precioMasMovil = 49.61;
        mensajeMasMovil = `Tarifa seleccionada: Fibra(1GB) + Fijo + Movil(60GB) - ${precioMasMovil} €`;
    } else if (document.getElementById('movil120GB').checked) {
        precioMasMovil = 59.29;
        mensajeMasMovil = `Tarifa seleccionada: Fibra(1GB) + Fijo + Movil(120GB) - ${precioMasMovil} €`;
    } else {
        precioMasMovil = 0;
    }

    // Mostrar el mensaje
    document.getElementById("muestraMensajeMovil").innerText = mensajeMasMovil;

    // Retorna el mensaje (si lo necesitas en otro lugar)
    return;
}


function calcular10GB() {
    //variables para calcular la tarifa de 10GB
    let cantidad10GB = 0;
    let precio10GB = 2.42;
    let mensaje10GB = '';


    //Condicionales
    if (document.getElementById('cantidad10_02').checked) {
        cantidad10GB = 1;
    } else if (document.getElementById('cantidad10_03').checked) {
        cantidad10GB = 2;
    } else if (document.getElementById('cantidad10_04').checked) {
        cantidad10GB = 3;
    } else if (document.getElementById('cantidad10_05').checked) {
        cantidad10GB = 4;
    }

    //Calcular monto
    monto10GB = (cantidad10GB * precio10GB).toFixed(2);
    //Por defecto sera string por eso usaremos parseFloat
    monto10GB = parseFloat(monto10GB);


    if (monto10GB > 0) {
        mensaje10GB = `${cantidad10GB === 1 ? '1 Móvil' : `${cantidad10GB} Móviles`} 10GB: ${monto10GB} €`;
    }

    document.getElementById("muestraMensaje10").innerText = mensaje10GB;

    //Retorna el mensaje
    return;
}

function calcular35GB() {
    // Variables para calcular la tarifa de 35GB
    let cantidad35GB = 0;
    let precio35GB = 8.47;
    let mensaje35GB = '';

    // Condicionales
    if (document.getElementById('cantidad35_02').checked) {
        cantidad35GB = 1;
    } else if (document.getElementById('cantidad35_03').checked) {
        cantidad35GB = 2;
    } else if (document.getElementById('cantidad35_04').checked) {
        cantidad35GB = 3;
    } else if (document.getElementById('cantidad35_05').checked) {
        cantidad35GB = 4;
    }

    // Calcular monto
    monto35GB = (precio35GB * cantidad35GB).toFixed(2);
    //Volvemos tipo numero
    monto35GB = parseFloat(monto35GB);

    if (monto35GB > 0) {
        mensaje35GB = `${cantidad35GB === 1 ? '1 Móvil' : `${cantidad35GB} Móviles`} 35GB: ${monto35GB} €`;
    }

    document.getElementById("muestraMensaje35").innerText = mensaje35GB;

    // Retorna el mensaje
    return;
}

function calcular60GB() {
    // Variables para calcular la tarifa de 60GB
    let cantidad60GB = 0;
    let precio60GB = 10.89;
    let mensaje60GB = '';

    // Condicionales
    if (document.getElementById('cantidad60_02').checked) {
        cantidad60GB = 1;
    } else if (document.getElementById('cantidad60_03').checked) {
        cantidad60GB = 2;
    } else if (document.getElementById('cantidad60_04').checked) {
        cantidad60GB = 3;
    } else if (document.getElementById('cantidad60_05').checked) {
        cantidad60GB = 4;
    }

    // Calcular monto
    monto60GB = (cantidad60GB * precio60GB).toFixed(2);
    //Volvemos tipo Número 
    monto60GB = parseFloat(monto60GB);

    if (monto60GB > 0) {
        mensaje60GB = `${cantidad60GB === 1 ? '1 Móvil' : `${cantidad60GB} Móviles`} 60GB: ${monto60GB} €`;
    }

    document.getElementById("muestraMensaje60").innerText = mensaje60GB;

    // Retorna el mensaje
    return;
}

function calcularServicio() {
    // Variables 
    let mensajeServicio = '';

    // Condicionales para determinar el servicio seleccionado
    if (document.getElementById('tvPremiun').checked) {
        precioServicio = 6;
        mensajeServicio = `Servicio seleccionado: Tv Premiun - ${precioServicio} €`;
    } else if (document.getElementById('tvExtra').checked) {
        precioServicio = 12;
        mensajeServicio = `Servicio seleccionado: Tv Extra - ${precioServicio} €`;
    } else if (document.getElementById('ipFija').checked) {
        precioServicio = 40.52;
        mensajeServicio = `Servicio seleccionado: Ip Fija - ${precioServicio} €`;
    } else {
        precioServicio = 0;
    }

    //Convertimos a Número
    precioServicio = parseFloat(precioServicio);

    // Mostrar el mensaje
    document.getElementById("muestraMensajeServ").innerText = mensajeServicio;

    // Retorna el mensaje 
    return;
}

function calcularTotal(){
    var total = monto10GB + monto35GB + monto60GB + precioServicio + precioMasMovil;
    //Existen algunos errores de decimales
    total = total.toFixed(2);
    document.getElementById("mensajeTotal").innerText = `Total: ${total} €`;
    return
}

function mostrarMensaje() {
    calcularMovil();
    calcular10GB();
    calcular35GB();
    calcular60GB();
    calcularServicio();
    calcularTotal();
}