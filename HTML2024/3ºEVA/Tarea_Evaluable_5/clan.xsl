<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!--Alejandro Rodríguez Álvarez-->
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html lang="es">
            <!--ACT 1-->
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>
                    <xsl:value-of select="//informacion/nombre_clan"/>
                </title>

                <link rel="stylesheet" href="css/estilosTLM05_CM_2223.css"/>
                <style>
                    :root {
                    --color-clan: <xsl:value-of select="//informacion/colores/color[@tipo='clan']"/>;
                    --color-primario: <xsl:value-of select="//informacion/colores/color[@tipo='primario']"/>;
                    --color-secundario: <xsl:value-of select="//informacion/colores/color[@tipo='secundario']"/>;
                    }
                </style>
            </head>

            <body>
                <xsl:variable name="imag">
                    <xsl:value-of select="/clan/informacion/logo"/>
                </xsl:variable>

                <header class="content">
                    <div class="picture">
                        <img src="{$imag}" alt="logo del clan"/>
                    </div>
                    <div class="header-texto">
                        <h1>
                            <xsl:value-of select="//informacion/nombre_clan"/></h1>
                        <h2>
                            <xsl:value-of select="//informacion/emblema"/></h2>
                        <p>
                            <xsl:value-of select="//informacion/descripcion"/></p>
                    </div>
                </header>
                <!--ACT 2-->
                <main class="content">
                    <h1>Miembros del clan</h1>
                    <div class="fichas">
                        <xsl:for-each select="//jugadores/jugador">
                            <xsl:variable name="rol">
                                <xsl:value-of select="@rol"/>
                            </xsl:variable>
                            <xsl:variable name="imagen">
                                <xsl:value-of select="./foto"/>
                            </xsl:variable>
                            <xsl:if test="@rol='principal' or @rol='lider'">
                                <article class="ficha {$rol}">
                                    <div class="picture">
                                        <img src="{$imagen}" alt="{$imagen}"/>
                                        <!-- los puntos se calculan sumando todas las habilidades del guerrero -->
                                        <div class="puntos">
                                            <xsl:value-of select="sum(./habilidades/habilidad)"/>
                                        </div>
                                    </div>
                                    <h2>
                                        <xsl:value-of select="./jugador_nombre"/>
                                    </h2>
                                    <h3>
                                        <xsl:value-of select="./nivel"/>
                                        <xsl:text> - </xsl:text>
                                        <xsl:value-of select="./raza"/>
                                    </h3>
                                    <table class="skills-table">
                                        <tr>
                                            <th colspan="3">Habilidades</th>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="fuerza">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='FUE']"/>
                                            </xsl:variable>
                                            <td>FUE:</td>
                                            <td class="progress-item"><progress max="10" value="{$fuerza}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$fuerza"/></td>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="destreza">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='DES']"/>
                                            </xsl:variable>
                                            <td>DES:</td>
                                            <td class="progress-item"><progress max="10" value="{$destreza}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$destreza"/></td>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="constitucion">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='CON']"/>
                                            </xsl:variable>
                                            <td>CON:</td>
                                            <td class="progress-item"><progress max="10" value="{$constitucion}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$constitucion"/></td>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="inteligencia">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='INT']"/>
                                            </xsl:variable>
                                            <td>INT:</td>
                                            <td class="progress-item"><progress max="10" value="{$inteligencia}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$inteligencia"/></td>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="sabiduria">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='SAB']"/>
                                            </xsl:variable>
                                            <td>SAB:</td>
                                            <td class="progress-item"><progress max="10" value="{$sabiduria}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$sabiduria"/></td>
                                        </tr>
                                        <tr>
                                            <xsl:variable name="carisma">
                                                <xsl:value-of select="./habilidades/habilidad[@cod='CAR']"/>
                                            </xsl:variable>
                                            <td>CAR:</td>
                                            <td class="progress-item"><progress max="10" value="{$carisma}"></progress></td>
                                            <td>
                                                <xsl:value-of select="$carisma"/></td>
                                        </tr>
                                    </table>
                                </article>

                            </xsl:if>
                        </xsl:for-each>
                    </div>
                </main>

                <!--ACT 3-->
                <div class="content fichas">
                    <xsl:for-each select="//jugadores/jugador">
                        <xsl:variable name="rol">
                            <xsl:value-of select="@rol"/>
                        </xsl:variable>
                        <xsl:variable name="imagen">
                            <xsl:value-of select="./foto"/>
                        </xsl:variable>
                        <xsl:if test="not(@rol='principal' or @rol='lider')">
                            <article class="ficha {$rol}">
                                <div class="picture">
                                    <img src="{$imagen}" alt="{$imagen}"/>
                                    <div class="puntos">
                                        <xsl:value-of select="sum(./habilidades/habilidad)"/>
                                    </div>
                                </div>
                                <h2><xsl:value-of select="./jugador_nombre"/></h2>
                                <h3>
                                    <xsl:value-of select="./nivel"/>
                                    <xsl:text> - </xsl:text>
                                    <xsl:value-of select="./raza"/>
                                </h3>
                                <table class="skills-table">
                                    <tr>
                                        <th colspan="3">Habilidades</th>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="fuerza">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='FUE']"/>
                                        </xsl:variable>
                                        <td>FUE:</td>
                                        <td class="progress-item"><progress max="10" value="{$fuerza}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$fuerza"/></td>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="destreza">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='DES']"/>
                                        </xsl:variable>
                                        <td>DES:</td>
                                        <td class="progress-item"><progress max="10" value="{$destreza}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$destreza"/></td>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="constitucion">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='CON']"/>
                                        </xsl:variable>
                                        <td>CON:</td>
                                        <td class="progress-item"><progress max="10" value="{$constitucion}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$constitucion"/></td>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="inteligencia">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='INT']"/>
                                        </xsl:variable>
                                        <td>INT:</td>
                                        <td class="progress-item"><progress max="10" value="{$inteligencia}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$inteligencia"/></td>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="sabiduria">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='SAB']"/>
                                        </xsl:variable>
                                        <td>SAB:</td>
                                        <td class="progress-item"><progress max="10" value="{$sabiduria}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$sabiduria"/></td>
                                    </tr>
                                    <tr>
                                        <xsl:variable name="carisma">
                                            <xsl:value-of select="./habilidades/habilidad[@cod='CAR']"/>
                                        </xsl:variable>
                                        <td>CAR:</td>
                                        <td class="progress-item"><progress max="10" value="{$carisma}"></progress></td>
                                        <td>
                                            <xsl:value-of select="$carisma"/></td>
                                    </tr>
                                </table>
                            </article>
                        </xsl:if>
                    </xsl:for-each>


                </div>


                <!--ACT 4-->
                <div class="content estadisticas">
                    <h1>Estadísticas</h1>
                    <div class="clasificacion">
                        <!-- se muestran los 5 miembros más fuertes del clan ordenados por la habilidad FUE de mayor a menor -->
                        <h2>Los 5 más fuertes</h2>
                        <ol>
                            <xsl:for-each select="//jugadores/jugador">
                                <xsl:sort select="./habilidades/habilidad[@cod='FUE']" order="descending"/>
                                <xsl:if test="position()&lt;=5">
                                    <li>
                                        <xsl:value-of select="./jugador_nombre"/>
                                        <xsl:text> - FUE: </xsl:text>
                                        <xsl:value-of select="./habilidades/habilidad[@cod='FUE']"/>
                                    </li>
                                </xsl:if>
                            </xsl:for-each>
                        </ol>
                    </div>
                    <div class="clasificacion">
                        <!-- se muestran los 5 miembros con más nivel del clan ordenados de mayor a menor nivel-->
                        <h2>Los 5 con más nivel</h2>
                        <ol>
                            <xsl:for-each select="//jugadores/jugador">
                                <xsl:sort select="./nivel" order="descending"/>
                                <xsl:if test="position()&lt;=5">
                                    <li>
                                        <xsl:value-of select="./jugador_nombre"/>
                                        <xsl:text> - nivel: </xsl:text>
                                        <xsl:value-of select="./nivel"/>
                                    </li>
                                </xsl:if>
                            </xsl:for-each>
                        </ol>
                    </div>

                </div>

                <!--ACT 5-->
                <div class="grupos">
                    <h1>Grupos</h1>
                    <xsl:for-each select="//grupos/grupo">
                        <xsl:sort select="./@nombre" order="ascending"/>
                        <div class="grupo">
                            <h2>
                                <xsl:value-of select="./@nombre"/>
                            </h2>
                            <xsl:for-each select="./integrante">
                                <xsl:variable name="grup">
                                    <xsl:value-of select="."/>
                                </xsl:variable>
                                <xsl:for-each select="//jugadores/jugador">
                                    <xsl:if test="./@id=$grup">
                                        <xsl:variable name="imag2">
                                            <xsl:value-of select="./foto"/>
                                        </xsl:variable>
                                        <article class="ficha miniatura">
                                            <div class="picture">
                                                <img src="{$imag2}" alt="{$imag2}"/>
                                            </div>
                                            <h5>
                                                <xsl:value-of select="./jugador_nombre"/>
                                                <xsl:text>(nivel </xsl:text>
                                                <xsl:value-of select="./nivel"/>
                                                <xsl:text> )</xsl:text>
                                            </h5>
                                        </article>
                                    </xsl:if>
                                </xsl:for-each>
                            </xsl:for-each>
                        </div>
                    </xsl:for-each>
                </div>
                <footer>
                    <h5>P.LLuyot - 2023.</h5>
                </footer>

            </body>

        </html>
    </xsl:template>
</xsl:stylesheet>