<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html lang="es"/>
        <head>
            <meta charset="UTF-8"/>
            <title>Participantes Concurso LuckyDaw</title>
            <link rel="stylesheet" href="estilos.css"/>
        </head>
        <body>
            <div class="header">
                <h1>Información del concurso LuckyDaw</h1>
            </div>

            <main>
                <h2>Listado de Participantes</h2>
                <ol class="participantes">
                    <!-- Lista de participantes-->
                    <xsl:for-each select="//participante">
                        <li>
                            <xsl:value-of select="apellidos"/>
                            <xsl:text>, </xsl:text>
                            <xsl:value-of select="nombre"/><xsl:text>. (</xsl:text><xsl:value-of select="@codigo"/>) <xsl:text> - </xsl:text>
                            <xsl:value-of select="puntos"/>
                            <xsl:text> puntos</xsl:text> </li>
                    </xsl:for-each>
                </ol>

                <h2>5 - Mejores participantes con más de 15 puntos</h2>
                <table class="participantes-t ancho">
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>Participante</th>
                            <th>Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Tabla de participantes-->
                        <xsl:for-each select="//participante[puntos&gt;15]">
                            <xsl:sort select="puntos" order="descending"/>
                            <xsl:if test="position()&lt;=5">
                                <tr>
                                    <td>
                                        <xsl:value-of select="position()"/></td>
                                    <td><xsl:value-of select="apellidos"/>
                                        <xsl:text>, </xsl:text>
                                        <xsl:value-of select="nombre"/><xsl:text>.</xsl:text>
                                    </td>
                                    <td>
                                        <xsl:value-of select="puntos"/>
                                    </td>
                                </tr>
                            </xsl:if>
                        </xsl:for-each>
                    </tbody>
                </table>
                <div class="estad">
                    <h2>Estadísticas</h2>
                    <xsl:variable name="n_part">
                        <xsl:value-of select="count(//participante)"/>
                    </xsl:variable>
                    <xsl:variable name="punt_tot">
                        <xsl:value-of select="sum(//puntos)"/>
                    </xsl:variable>
                    <xsl:variable name="mas_18_menos_35">
                        <xsl:value-of select="count(//participante[edad&gt;=18 and edad&lt;=35])"/>
                    </xsl:variable>
                    <xsl:variable name="mas_36_menos_55">
                        <xsl:value-of select="count(//participante[edad&gt;=36 and edad&lt;=55])"/>
                    </xsl:variable>
                    <xsl:variable name="mas_55">
                        <xsl:value-of select="count(//participante[edad&gt;55])"/>
                    </xsl:variable>
                    <ul>
                        <li><span>Número total de participantes:</span> <span class="stats">
                            <xsl:value-of select="$n_part"/></span></li>
                        <li><span>Puntuación media:</span> <span class="stats">
                            <xsl:value-of select="format-number($punt_tot div $n_part,'#0.00') "/></span></li>
                        <li><span>Participantes de 18 a 35 años:</span> <span class="stats"><xsl:value-of select="$mas_18_menos_35"/><xsl:text>(</xsl:text><xsl:value-of
                                select="format-number((100*$mas_18_menos_35) div $n_part,'#0.00')"/><xsl:text>%)</xsl:text></span></li>
                        <li><span>Participantes de 36 a 55 años:</span> <span class="stats"><xsl:value-of select="$mas_36_menos_55"/><xsl:text>(</xsl:text><xsl:value-of
                                select="format-number(100*$mas_36_menos_55 div $n_part,'#0.00') "/><xsl:text>%)</xsl:text></span></li>
                        <li><span>Participantes de más de 55 años:</span> <span class="stats"><xsl:value-of select="$mas_55"/><xsl:text>(</xsl:text><xsl:value-of
                                select="format-number(100*$mas_55 div $n_part, '#0.00') "/><xsl:text>%)</xsl:text></span></li>
                    </ul>
                    <table class="participantes-t">
                        <thead>
                            <tr>
                                <th>Provincia</th>
                                <th>Nº Participantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Tabla de participantes por provincia -->
                            <xsl:for-each select="//provincia">
                                <xsl:sort select="." order="ascending"/>
                                <xsl:if test="not(preceding::provincia=.)">
                                    <tr>
                                        <td>
                                            <xsl:value-of select="."/>
                                        </td>
                                        <td>
                                            <xsl:variable name="por_Actu">
                                                <xsl:value-of select="."/>
                                            </xsl:variable>
                                            <xsl:value-of select="count(//participante[provincia=$por_Actu])"/>
                                        </td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <p>LUCKYDAW - 2024</p>
            </footer>
        </body>

    </xsl:template>

</xsl:stylesheet>