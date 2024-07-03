for $s in //personaje
return concat($s//nombre,": ",$s//alias,"-> ",$s/@id)