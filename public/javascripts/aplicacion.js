(function() { var app= angular.module('ControlClientes',[]);
    
    
app.controller('ControlPanel',function()
                {
                    
                    this.tab=1;
                    this.SelectTab = function(stab){  this.tab=stab; };
    
                    this.imagenes={
                                   alerta:"images/ic_assignment_late_black_36dp.png",
                                   chulo:"images/ic_assignment_turned_in_black_36dp.png",
                                   menu:"images/ic_dashboard_black_36dp.png",
                                   usuario:"images/ic_assignment_ind_black_36dp.png",
                                   tablilla:"images/ic_assignment_black_36dp.png",
                                   buscar:"images/ic_find_in_page_black_36dp.png",
                                   like:"images/ic_thumb_up_black_18dp.png",
                                   unlike:"images/ic_thumb_down_black_18dp.png"
                                  };
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
    
app.controller('NuevoCliente',function(){
    
    this.nuevocliente={};
    this.addCliente= function(useradd){
                                        useradd.nuevocliente.push(this.nuevocliente);
                                      };
    
                });
        
 
				
})();