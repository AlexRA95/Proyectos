<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Aula</th>
            </tr>
            <xsl:for-each select="//producto">
                <tr>
                    <td>
                        <xsl:value-of select="@codigo"/>
                    </td>
                    <td>
                        <xsl:value-of select="nombre"/>
                    </td>
                    <td>
                        <xsl:value-of select="lugar/@edificio"/>
                        <xsl:value-of select="lugar/aula"/>
                    </td>
                </tr>
            </xsl:for-each>
        </table>

    </xsl:template>
</xsl:stylesheet>