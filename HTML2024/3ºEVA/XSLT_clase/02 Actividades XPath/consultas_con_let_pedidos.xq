for $f in //factura/articulo
let $p:=(//producto[numero=$f/@num]/nombre)
return <venta num="{$f/@num}" producto="{$p}" cantidad="{$f/@cantidad}"/>

,"-------------------------",
for $f in distinct-values(//@categ) 
let $var :=sum(//articulo[@categ=$f]/@cantidad)
return <departamento categ="{$f}" cantidad="{$var}"/>

,"-------------------------",

let $var:=(
  for $f in //articulo
  return $f/@categ
)
return distinct-values($var)


,"-------------------------",

<ul>{
for $p in //producto
where $p/@categ="C02"
return <li> {$p/nombre/string()}</li>
}</ul>
