function mostrar(){
    var opc = parseInt(prompt("Selecciona cual figura deseas obtener su angulo: \n1 Rectangulo \n2 Cuadrado \n3 Triangulo"))
    switch(opc){
        case 1:
            var base=parseInt(prompt("Ingresa la base"));
            var altura=parseInt(prompt("Ingresa la altura"));
            var respuesta=base*altura;
            if(base!=0 && altura!=0){
                document.write("El resultado del area del rectangulo es: "+respuesta )
            }else{
                document.write("Los datos no pueden ser igual a cero")
            }
        break;

        case 2:
            var lado=parseInt(prompt("Ingrese la medida del lado del cuadrado"));
            var respuesta=lado*lado;
            document.write("El area del cuadrado es: "+respuesta )
        break;

        case 3:
            var base=parseInt(prompt("Ingresa la base"));
            var altura=parseInt(prompt("Ingresa la altura"));
            var respuesta=base*altura/2;
            if(base!=0 && altura!=0){
                document.write("El area del triangulo es: "+respuesta )
            }else{
                document.write("Los datos no pueden ser igual a cero")
            }
        break;
    }
}