<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <head>

        </head>
        <body>
            <xsl:variable name="IVA" select="1.21"></xsl:variable>
            <xsl:for-each select="//libro">
                <xsl:sort select="titulo" order="descending"/>
                <xsl:if test="precio &lt; 6">
                    <p><xsl:value-of select="autor"/> - <xsl:value-of select="@isbn"/> -
                        <xsl:value-of select="format-number(precio * $IVA,'##0.00') "/> </p>
                </xsl:if>
            </xsl:for-each>
        </body>
    </xsl:template>

</xsl:stylesheet>