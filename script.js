(function($){
$.fn.extend({
    valida: function(){
        var $this = $(this);
  
        //Validacion:  Se verifica que cada campo cumpla con la expresion regular dependiendo del tipo de compo.
        //             Ejecutando las validaciones con los eventos [ focus, keypress, blur ]
        $(this).find("input").each(function(){
            var typ =  $(this).attr("type");
            switch(typ){
                case "text":
                    $(this).focus(function(){
                        $(this).keypress(function(){
                            var expresion = /^[a-z0-9ü][a-z0-9ü_]{7,14}$/;
                            var valor = $(this).val();
                            if(!expresion.test(valor)){
                                $(this).css({ "border" : " 3px solid red" });
                            }else{
                                $(this).css({ "border" : "3px solid green" });
                            }
                        });
                    });

                    $(this).blur(function(){
                        var expresion = /^[a-z0-9ü][a-z0-9ü_]{7,14}$/;
                        var valor = $(this).val();
                        if(!expresion.test(valor)){
                            $(this).css({ "border" : " 3px solid red" });
                        }else{
                            $(this).css({ "border" : "3px solid green" });
                        }
                    });


                    break;
                    case "email":
                        $(this).focus(function(){
                            $(this).keypress(function(){
                                var expresion = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
                                var valor = $(this).val();
                                if(!expresion.test(valor)){
                                     $(this).css({ "border" : " 2px solid red" });
                                }else{
                                    $(this).css({ "border" : " 2px solid green" });
                                }
                            });
                        });

                        $(this).blur(function(){
                            var expresion = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
                            var valor = $(this).val();
                            if(!expresion.test(valor)){
                                 $(this).css({ "border" : " 2px solid red" });
                            }else{
                                $(this).css({ "border" : " 2px solid green" });
                            }
                        });
                    break;
                    case "password":
                        $(this).focus(function(){
                            $(this).keypress(function(){
                                var expresion = /^[a-zA-Z0-9]{8,10}$/;
                                var valor = $(this).val();
                                if(!expresion.test(valor)){
                                    $(this).css({ "border" : " 2px solid red" });
                                }else{
                                    $(this).css({ "border" : " 2px solid green" });
                                }
                            });
                        });
                        $(this).blur(function(){
                            var expresion = /^[a-zA-Z0-9]{8,10}$/;
                            var valor = $(this).val();
                            if(!expresion.test(valor)){
                                $(this).css({ "border" : " 2px solid red" });
                            }else{
                                $(this).css({ "border" : " 2px solid green" });
                            }
                        });
                    break;
                default:
                    $(this).focus(function(){
                        $(this).keypress(function(){
                            var valor = $(this).val();
                            if(valor == 0){
                               $(this).css({ "border" : " 2px solid red" });
                            }else{
                               $(this).css({ "border" : " 2px solid green" });
                            }
                        });
                    });
                    $(this).blur(function(){
                        var valor = $(this).val();
                        if(valor == 0){
                           $(this).css({ "border" : " 2px solid red" });
                        }else{
                           $(this).css({ "border" : " 2px solid green" });
                        }
                    });
                break;
            }
       });


        //Validacion: Se verifica que ningun campo este vasio al memento de querer enviar el formulario
       $(this).on('submit', function(e){ 
            e.preventDefault();
            $(this).find("input").each(function(){
                var valor = $(this).val();
                if(valor=="" || valor==null){
                    $(this).css({ "border" : " 3px solid red" });
                }else{
                    $(this).css({ "border" : "3px solid green" });
                }
            });
        });
    }

});
})(jQuery)
	