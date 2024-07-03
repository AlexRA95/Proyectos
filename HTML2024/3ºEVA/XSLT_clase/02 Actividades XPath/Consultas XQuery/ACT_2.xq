for $i in //sospechoso
let $p :=(//personaje[@id=$i/id])
where string-length($i/movil)=0
return concat($p//nombre,": ",$p//alias,"-> ",$p/@id)