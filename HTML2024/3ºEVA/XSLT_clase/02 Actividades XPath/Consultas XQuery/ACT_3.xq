for $s in //personaje
where starts-with($s//rasgos/lateralidad,"z")
return concat($s//nombre,": ",$s//alias,"-> ",$s/@id,", lateralidad: ",$s//rasgos/lateralidad )