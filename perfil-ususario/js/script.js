$(document).ready(function(){

    $('#btn-alerta').click(function(){
        alert('¡Bienvenido a mi perfil!');
    });

    $('#btn-cambiar-fondo').click(function(){
        let color = prompt("Ingrese un color de fondo:");
        if(color){
            $('body').css('background-color', color);
            localStorage.setItem('bgColor', color);
        }
    });
    if(localStorage.getItem('bgColor')){
        $('body').css('background-color', localStorage.getItem('bgColor'));
    }

    $('#btn-cambiar-texto').click(function(){
        $('#descripcion').text('Hola Soy Cristel Morales, Bienvenido este texto se actualizo dinamicamente jajaja.');
    });

    $('#form-contacto').submit(function(e){
        e.preventDefault();
        let nombre = $('#nombre').val();
        let correo = $('#correo').val();
        let mensaje = $('#mensaje').val();

        if(!nombre || !correo || !mensaje){
            alert('Todos los campos son obligatorios');
            return;
        }

        let li = $('<li>').text(`${nombre} (${correo}): ${mensaje}`);
        $('#lista-dinamica').append(li);

        localStorage.setItem('formData', JSON.stringify({nombre, correo, mensaje}));
    });

    let datos = JSON.parse(localStorage.getItem('formData'));
    if(datos){
        $('#nombre').val(datos.nombre);
        $('#correo').val(datos.correo);
        $('#mensaje').val(datos.mensaje);
    }

});
