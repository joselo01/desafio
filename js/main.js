$(document).ready(
    function() {
        jQuery.validator.addMethod("notEqualToGroup", function(value, element, options) {
            // se obtiene los elementos con la misma clase
            var elems = $(element).parents('form').find(options[0]);
            // se obtiene el valor del elemento actual
            var valueToCompare = value;
            // contador
            var matchesFound = 0;
            // se realiza un recorrido y se compara el valor actual
            // se incrementa el valor con each
            jQuery.each(elems, function() {
                thisVal = $(this).val();
                if (thisVal == valueToCompare) {
                    matchesFound++;
                }
            });
            // el conteo debe ser de 0 a 1 maximo
            if (this.optional(element) || matchesFound <= 1) {
                //elems.removeClass('error');
                return true;
            } else {
                //elems.addClass('error');
            }
        }, jQuery.format("Introduzca un valor diferente."))

        // validate form 

        $("#signupform").validate({

            rules: {
                campo1: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },

                campo2: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo3: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo4: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo5: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo6: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo7: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
                campo8: {
                    required: true,
                    notEqualToGroup: ['.campo']
                },
            },
            messages: {
                campo1: {
                    required: "campo requerido"
                },
                campo2: {
                    required: "campo requerido"
                },

                campo3: {
                    required: "campo requerido"
                },

                campo4: {
                    required: "campo requerido"
                },

                campo5: {
                    required: "campo requerido"
                },

                campo6: {
                    required: "campo requerido"
                },

                campo7: {
                    required: "campo requerido"
                },

                campo8: {
                    required: "campo requerido"
                }

            }

        });

        // establecemos todo el proceso cuando se presiona el boton
        $('#btn-1').click(function() {

            /*Ordenamiento ascendente*/

            // inicializamos el array que vamos a utilizar
            var values, fields = $('input[id^="numbers"]');

            // limpiar la matriz que vamos a utilizar
            values = [];

            // obtener valores de todo los input usando su nombre       
            // guardarlos en la matriz previamente creada
            fields.each(function(index, element) {
                values.push(parseInt(element.value));
            });

            // ordenar los valores  
            values.sort(function(a, b) {
                return a - b;
            });
            // recorrer otra vez todos los input para establecer los valores 
            // ordenados nuevos
            fields.each(function(index, element) {
                element.value = values[index];
            });

            $("#signupform").valid();
        })
    });