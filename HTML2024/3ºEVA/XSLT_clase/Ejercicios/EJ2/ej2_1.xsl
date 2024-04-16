<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml"/>

    <xsl:template match="/">
        <inventario>
            <xsl:for-each select="//producto">
                <xsl:choose>
                    <xsl:when test="peso/@unidad = 'g'and peso &lt; 3000">
                        <xsl:copy-of select="."/>
                    </xsl:when>
                    <xsl:when test="peso/@unidad = 'kg' and peso &lt; 3">
                        <xsl:copy-of select="."/>
                    </xsl:when>
                </xsl:choose>

            </xsl:for-each>
        </inventario>

    </xsl:template>
</xsl:stylesheet>