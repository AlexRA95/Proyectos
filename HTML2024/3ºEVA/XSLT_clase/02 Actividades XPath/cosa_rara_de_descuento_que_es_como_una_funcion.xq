
declare function local:descuento($p1 as xs:decimal, $p2 as xs:decimal, $p3 as xs:integer) as xs:decimal
{
  let $desc_max :=($p1*$p3) div 100
  let $desc_aplicable :=min(($p2,$desc_max))
  let $precio := ($p1 - $desc_aplicable)
  return $precio
  
};

let $pr := local:descuento(200,5,10)
return $pr