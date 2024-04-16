<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <xsl:for-each select="//producto">
            <ul>
                <li> <p>Elemento <xsl:value-of select="@codigo"/></p> </li>
                <ul>
                    <li>
                        <p>Nombre: <xsl:value-of select="nombre"/></p>
                    </li>
                    <li>
                        <p>Peso: <xsl:value-of select="peso"/> <xsl:value-of select="peso/@unidad"/></p>
                    </li>
                </ul>
            </ul>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>