(:
EJ 4-1
//libro[contains(autor,'a')]/titulo/text()

EJ 4-2
//libro[starts-with(autor,'J')]/autor/text()

EJ 4-3
//libro[ends-with(titulo,'ad')]//text()

EJ 4-4
//libro[string-length(autor)<10]/autor/text()

EJ 4-5
sum(//precio[@moneda='EUR'])

EJ 4-6
count(//precio[@moneda!='EUR'])

EJ 4-7
//libro[precio=max(//precio[@moneda='EUR'])]/autor/text()

EJ 4-8
//libro[anio=min(//anio)]/titulo/text()

EJ 4-9
//libro[precio<avg(//precio[@moneda='EUR'])]/titulo/text()

:)

//libro[precio<avg(//precio[@moneda='EUR'])]/titulo/text()
