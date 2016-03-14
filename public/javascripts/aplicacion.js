(function()
 
 {



var app= angular.module('ControlClientes',[]);
    
    
app.controller('ControlPanel',function()
                {
                    
                    this.tab=1;
              
                });
    
app.controller('ClientesLista', function ()
               {
                 this.clientes= [
                                        {'nombre':"Pablo Cesar", apellido:"agudelo"},
                                        {'nombre':"Katherine Chavez",apellido:"Guzman"},
                                        {'nombre':"Anres Felipe", apellido:"Agudelo"},
                                        {'nombre':"Camilo Javier", apellido:"Soto"}
                                    ];
                });
    

        
 
				
})();