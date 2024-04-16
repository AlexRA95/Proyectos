<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <h3>EDIFICIO A</h3>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Aula</th>
            </tr>
            <xsl:for-each select="//producto">
                <xsl:if test="lugar/@edificio='A'">
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

                </xsl:if>
            </xsl:for-each>
        </table>
        <h3>EDIFICIO B</h3>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Aula</th>
            </tr>
            <xsl:for-each select="//producto">
                <xsl:if test="lugar/@edificio='B'">
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

                </xsl:if>
            </xsl:for-each>
        </table>
        <h3>EDIFICIO C</h3>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Aula</th>
            </tr>
            <xsl:for-each select="//producto">
                <xsl:if test="lugar/@edificio='C'">
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

                </xsl:if>
            </xsl:for-each>
        </table>

    </xsl:template>
</xsl:stylesheet>