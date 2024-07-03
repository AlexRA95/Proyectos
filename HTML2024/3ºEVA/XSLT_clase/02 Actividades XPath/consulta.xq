(: for $w in doc("C:\Users\Alex\Downloads\Descarga 1.xml")//personaje
where $w/casa="Stark"
return concat($w/@id,";", $w/nombre) :)
(: for $p in //personaje
where $p/residencia="Desembarco del Rey"
  and not($p/cambiapieles)
order by $p/edad descending
return <persona codigo="{$p/@id}">{concat($p/nombre, " (",$p/apodo, ")")}</persona> :)
