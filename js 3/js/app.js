function calc(){
    var opc = parseInt(prompt("Selecciona el tipo de operación a realizar: \n1 Suma \n2 Resta \n3 Multiplicar \n4 Dividir \n5 Mayor, menor o igual"))
    switch(opc){
        case 1:
            var num1 = parseInt(prompt("Ingresa un número"));
            var num2 = parseInt(prompt("Ingresa otro número"));
            var respuesta = num1+num2;
            
                document.write("El resultado de la suma es: "+respuesta )
            
        break;

        case 2:
            var num1 = parseInt(prompt("Ingrese un número"));
            var num2 = parseInt(prompt("Ingrese otro número"));
            var respuesta = num1-num2;
            document.write("El resultado de la resta es: "+respuesta )
        break;

        case 3:
            var num1 = parseInt(prompt("Ingresa un número"));
            var num2 = parseInt(prompt("Ingresa otro número"));
            var respuesta = num1*num2;
            document.write("El resultado de la multiplicación es: "+respuesta )
        break;

        case 4:
            var num1 = parseInt(prompt("Ingresa un número"));
            var num2 = parseInt(prompt("Ingresa otro número"));
            var respuesta = num1/num2;
                document.write("El resultado de la división es: "+respuesta )
        break;

        case 5:
            var num1 = parseInt(prompt("Ingresa un número"));
            var num2 = parseInt(prompt("Ingresa otro número"));
            if(num1>num2){
                document.write(+num1+ " es mayor que "+num2 )
            }else if(num1<num2){
                document.write(+num2+ " es mayor que " +num1 )
            }else{
                document.write("Los números son iguales")
            }
        break;
    }
}