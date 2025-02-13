

$(function(){
    inicializarEventos();


    function inicializarEventos(){
        let C1=$("#C1");
        let C2=$("#C2");
        let C3=$("#C3");
        let C4=$("#C4");

        var numRandom=Math.random()*3+1;
        numRandom = Math.round(numRandom);

        C1.click(Ca1 , Gnador(numRandom,SelecionUsuario));
        C2.click(Ca2 , Gnador(numRandom,SelecionUsuario));
        C3.click(Ca3 , Gnador(numRandom,SelecionUsuario));
        C4.click(Ca4 , Gnador(numRandom,SelecionUsuario));
    }
    
    function Ca1(){
        let SelecionUsuario=1; 
        return SelecionUsuario;
    }
    
    function Ca2(){
        let SelecionUsuario=2; 
        return SelecionUsuario;
    }
    
    function Ca3(){
        let SelecionUsuario=3; 
        return SelecionUsuario;
    }
    
    function Ca4(){
        let SelecionUsuario=4; 
        return SelecionUsuario;
    }
      
    function Gnador(numRandom , SelecionUsuario){
        if(SelecionUsuario==numRandom){
            alert("Ganas")
        }else{
            alert("Pierdes")
        }
    }

});
