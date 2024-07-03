for $b in //cuenta
let $pe:=(//personaje[@id=$b//titular/@cod])
let $diff:=($b/datos/saldo_actual - $b/datos/saldo_inicio_mes)
where $diff<20000
return concat("Titular: ", $pe//nombre, ", COD-> ", $pe/@id, ", Diferencia= ", $diff, ". Cantidad actual-> ", $b/datos/saldo_actual, ", Cantidad al principio del més-> ", $b/datos/saldo_inicio_mes )