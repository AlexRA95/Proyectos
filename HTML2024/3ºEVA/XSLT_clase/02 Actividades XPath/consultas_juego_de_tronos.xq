declare function local:media($i1 as xs:integer, $i2 as xs:integer,$i3 as xs:integer,$i4 as xs:integer) as xs:decimal{
  
  let $hab := ($i1 , $i2 , $i3 , $i4)
  let $media := avg($hab)
  return $media
  
};

for $p in //personaje
let $aa := local:media($p//combate,$p//estratega,$p//política,$p//inteligencia)
let $ff := 
  if($aa>7)
  then "Aspirante al trono"
  else()
return concat($p/nombre, " --> ",$aa, " ",$ff)

,"-----------------------------------------------------",

<lider_protegido>{
for $p in //personaje
let $c := count(//criatura[protector_de=$p/@id])
where ($p//inteligencia>=8) and ($c >=1)
return <personaje inteligencia="{$p//habilidades/inteligencia/string()}">{$p//nombre/string()}</personaje>
}</lider_protegido>


,"-----------------------------------------------------",
for $c in //criatura
let $p :=(//personaje[@id=$c/protector_de])
where $c/raza = "Lobo huargo"
return  <lobo nombre="{$c/nombre/string()}"> <protegido>{$p/nombre/string()}</protegido></lobo>

,"-----------------------------------------------------",
(: for $p in //personaje
return $p :)

<ul>
{
for $p in distinct-values(//casa)
let $var:=count(//personaje[./casa=$p])
return <li>{concat("CASA ", $p," :", $var)}</li>
}</ul>