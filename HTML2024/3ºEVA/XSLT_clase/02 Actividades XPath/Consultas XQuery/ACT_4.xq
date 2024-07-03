for $p in //persona
let $pe:=(//personaje[@id=$p/@id])
where not($p/objeto="llaves") 
return concat($pe//nombre,": ",$pe//alias,"-> ",$pe/@id)