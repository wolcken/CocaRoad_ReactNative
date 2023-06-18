import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'

const Law = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>LEY GENERAL DE LA COCA</Text>
            <Text style={styles.title2}>CAPITULO I</Text>
            <Text style={styles.title2}>DISPOSICIONES GENERALES</Text>

            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTICULO 1.(OBJETO)</Text>
                <Text style={styles.text}>La presente Ley tiene por objeto:</Text>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>a)</Text>
                    <Text style={styles.text}>Normar la revalorización, producción, circulación, transporte, comercialización,
                        consumo, investigación, industrialización y promoción de la coca en su estado natural;</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>b)</Text>
                    <Text style={styles.text}>Establecer el marco institucional de regulación, control y fiscalización;</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>c)</Text>
                    <Text style={styles.text}>Regular las tasas administrativas.</Text>
                </View>
            </View>

            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTICULO 2.(FINALIDADES)</Text>
                <Text style={styles.text}>La presente Ley tiene las siguientes finalidades:</Text>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>a)</Text>
                    <Text style={styles.text}>Proteger y revalorizar la coca originaria y ancestral como patrimonio cultural y recurso
                        natural renovable del Estado Plurinacional de Bolivia;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>b)</Text>
                    <Text style={styles.text}>Promover y fortalecer el desarrollo integral sustentable, en las zonas de producción
                        autorizadas de coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>c)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>d)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>e)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>f)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
            </View>

            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTÍCULO 3. (ÁMBITO DE APLICACIÓN)</Text>
                <Text style={styles.text}>La presente Ley se aplica en todo el territorio del Estado Plurinacional de Bolivia, en actividades de revalorización, producción, circulación, transporte, comercialización, consumo, investigación, industrialización y promoción de la coca en su estado natural.</Text>
            </View>

            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTICULO 4.(PRINCIPIOS)</Text>
                <Text style={styles.text}>Los principios que rigen la presente Ley, son:</Text>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>a)</Text>
                    <Text style={styles.text}>Respeto a la coca. Como planta milenaria, originaria, ancestral y tradicional con cualidades benéficas para el pueblo boliviano, considerando que en su estado natural no es estupefaciente;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>b)</Text>
                    <Text style={styles.text}>Armonía y equilibrio con la Madre Tierra. La producción de la coca se realiza con métodos ancestralmente conocidos por los productores y en convivencia armónica con la Madre Tierra;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>c)</Text>
                    <Text style={styles.text}>Protección de la coca. El Estado Plurinacional de Bolivia protege a la coca como planta originaria y ancestral, patrimonio cultural y recurso natural renovable de por vida;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>d)</Text>
                    <Text style={styles.text}>Factor de cohesión social. La coca es símbolo de integración, reciprocidad, desarrollo, complementariedad, solidaridad, dignidad y soberanía de las bolivianas y los bolivianos, las naciones y pueblos indígena originario campesinos, comunidades interculturales y afrobolivianas;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>e)</Text>
                    <Text style={styles.text}>Recurso natural estratégico. La coca es un recurso natural tradicional que contribuye a la soberanía alimentaria, la salud, la dinamización laboral, la integralidad con la Madre Tierra y que forma parte de la biodiversidad del Estado Plurinacional de Bolivia;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>f)</Text>
                    <Text style={styles.text}>Orientadora de la cosmovisión. La coca fortalece los saberes y formas de existencia legados por nuestros ancestros, en el “sarawi”, “qhapaj ñan” o “ñandereko” andino amazónicos.
                    </Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 5.(DEFINICIONES)</Text>
                    <Text style={styles.text}>Para efectos de la presente Ley, se entendera por:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>a)</Text>
                        <Text style={styles.text}>Coca. Conocida ancestralmente como “inalmama”, es la planta milenaria que comprende desde la semilla, raíz, tallo, rama, hoja y flor, utilizada en actividades rituales, sociales, económicas, comunitarias, culturales, medicinales, alimenticias, investigativas e industriales;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>b)</Text>
                        <Text style={styles.text}> Coca ecológica. Es la producción de coca bajo sistemas de producción tradicional y ancestral sin el uso de productos botánicos o bioinsumos, ni el uso de productos químicos;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>c)</Text>
                        <Text style={styles.text}>Coca orgánica. Es la producción de coca que incluye el uso de productos botánicos o bioinsumos, así como el uso de productos químicos con etiqueta verde;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>d)</Text>
                        <Text style={styles.text}>Comerciante al detalle. Es la persona natural que se dedica a la actividad de comercialización de la hoja de coca en su estado natural, al por menor, desde el mercado autorizado hasta el consumidor final, cumpliendo normas previamente establecidas;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>e)</Text>
                        <Text style={styles.text}>Control social comunitario. Es el sistema de control interno que ejerce la comunidad y las organizaciones sociales productoras de coca, basado en sus usos, costumbres, normas y procedimientos propios que coadyuvan a lograr los fines de la presente Ley, no siendo sustitutivo al control y fiscalización del Estado;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>f)</Text>
                        <Text style={styles.text}>Erradicación. Es el proceso de supresión completa y definitiva del cultivo de coca en la zona no autorizada, a cargo de las entidades competentes del Estado;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>g)</Text>
                        <Text style={styles.text}>Racionalización. Es el proceso de supresión completa y definitiva de cultivo de coca excedentaria en las zonas de producción autorizadas bajo registro y catastro, a cargo de las entidades competentes del Estado, en el cual media la concertación;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>h)</Text>
                        <Text style={styles.text}>Parcela productiva. Es la superficie de terreno autorizada, en la que el productor desarrolla la actividad socio-productiva del cultivo de la coca;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>i)</Text>
                        <Text style={styles.text}>Producción ancestral de la coca. Comprende actividades de almacigado, trasplante, cultivo, cosecha y post-cosecha, deshidratación, matachado (rehidratación) y embalaje en origen de la hoja de coca, bajo sistemas consuetudinarios y técnicas productivas transmitidas de generación en generación, como la cavada (preparación del terreno para favorecer la germinación), plantación (forma de incorporación de la planta a la tierra en cortes y wachos) y las qillas (tacanas o wachos de piedra que permite evitar la degradación de la tierra y mantener la humedad). Además con la utilización de herramientas como la picota, wallwa, paleta, machete, chonta, mit’iña, mantel y saquilla para la cosecha de coca en los Departamentos de La Paz y Cochabamba;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>j)</Text>
                        <Text style={styles.text}>Productor de coca. Es la persona natural que desempeña directamente la actividad agrícola de producción de coca en su unidad productiva, cumpliendo los usos y costumbres en el marco de las obligaciones comunitarias, pudiendo transportar su producto desde el centro de producción hasta el mercado autorizado;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>k)</Text>
                        <Text style={styles.text}>Productor al detalle. Es el productor de coca autorizado que se dedica además a la comercialización de la hoja de coca en su estado natural, desde el centro de producción al mercado autorizado y hasta el consumidor final, cumpliendo con procedimientos normativos.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 6. (REGULACIÓN, CONTROL Y FISCALIZACIÓN)</Text>
                    <Text style={styles.text}>La producción, circulación, transporte, comercialización, industrialización, investigación y promoción de la coca, quedan sujetas a regulación, control y fiscalización del Estado.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 7. (CONTROL SOCIAL COMUNITARIO)</Text>
                    <Text style={styles.text}>Se reconoce y promueve el control social comunitario sobre la producción de la coca, no siendo sustitutivo al control y fiscalización del Estado.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 8.(ESTRATEGIA PARA EL DESARROLLO INTEGRAL SUSTENTABLE)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>Es el conjunto de acciones del Estado, dirigidas a fomentar actividades para mejorar las condiciones de vida individual y comunitaria de los productores de coca para Vivir Bien, mediante la implementación de un modelo de complementariedad económica asociada al cultivo de la coca.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>El Estado a través de planes, programas y proyectos fomentará el desarrollo integral sustentable de las poblaciones productoras de coca, promoviendo la diversificación de cultivos agrícolas, la asistencia técnica y crediticia, el desarrollo de la industria, apertura de mercados y el fortalecimiento de los sistemas de educación, salud, saneamiento básico y la articulación territorial.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>El nivel central del Estado y los Gobiernos Autónomos Departamentales y Municipales, priorizarán, en el marco de sus competencias, el desarrollo integral sustentable en las áreas de producción autorizadas en las que los productores no incurran con cultivos excedentarios.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 9.(PRÁCTICAS DE PRODUCCIÓN SUSTENTABLES)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El productor de coca deberá adoptar sistemas de producción ancestral, así como prácticas de adecuado manejo y conservación de suelos que garanticen las funciones ambientales en armonía con la Madre Tierra.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, en coordinación con las instancias competentes y las organizaciones sociales de productores de coca, diseñarán e implementarán estrategias dirigidas a la adopción de prácticas de producción sustentables y sostenibles.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 10.(RECUPERACIÓN Y CONSERVACIÓN DE SUELOS)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El productor de la hoja de coca, deberá implementar acciones para la conservación y recuperación del suelo.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Las entidades del Estado, en el marco de sus competencias, serán encargadas de velar por el cumplimiento de las acciones señaladas en el Parágrafo anterior.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>CAPITULO II</Text>
                <Text style={styles.title2}>REVALORIZACIÓN</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 11. (CARÁCTER PATRIMONIAL)</Text>
                    <Text style={styles.text}> Se reconoce a la coca como patrimonio cultural, originario y ancestral del pueblo boliviano, protegida como recurso natural renovable de la biodiversidad del Estado Plurinacional de Bolivia y como factor de cohesión social.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 12.(PRIORIDAD NACIONAL)</Text>
                    <Text style={styles.text}>Se declara de prioridad nacional la revalorización de la coca, el Estado Plurinacional de Bolivia, a través de las entidades competentes, generará e implementará políticas públicas para:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>a)</Text>
                        <Text style={styles.text}>El reconocimiento y la recuperación de la identidad y esencia histórica de la coca;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>b)</Text>
                        <Text style={styles.text}>Promover las cualidades de la coca en su estado natural, así como de sus derivados, a nivel nacional e internacional;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>c)</Text>
                        <Text style={styles.text}>Fomentar e incentivar a la recuperación y producción de coca orgánica y ecológica rescatando las prácticas ancestrales, originarias y culturales de los pueblos;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>d)</Text>
                        <Text style={styles.text}>Promover e incentivar la investigación e industrialización y exportación;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>e)</Text>
                        <Text style={styles.text}>Promocionar el consumo de la hoja de coca y sus derivados.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 13.(USOS DE LA COCA)</Text>
                    <Text style={styles.text}>Para efectos de la presente Ley, se reconoce como usos de la coca, las siguientes actividades:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>a)</Text>
                        <Text style={styles.text}>Acullicu, pijcheo, coqueo o boleo. Es la masticación de la hoja de coca en su estado natural y es un modo de consumo ancestral y tradicional como símbolo de diálogo, reciprocidad y equilibrio con la naturaleza, trascendiendo esta práctica los diferentes estratos sociales del pueblo boliviano;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>b)</Text>
                        <Text style={styles.text}>Usos rituales. Se refiere a las prácticas espirituales y ceremoniales propias de las culturas ancestrales indígena originario campesinas y afrobolivianas, expandidas hacia las poblaciones urbanas;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>c)</Text>
                        <Text style={styles.text}>Usos medicinales. Es el aprovechamiento de las propiedades naturales curativas de la coca, empleadas en la medicina científica, tradicional, ancestral, alternativa e industria farmacéutica;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>d)</Text>
                        <Text style={styles.text}>Usos alimenticios. Como parte de la dieta alimentaria por sus cualidades nutricionales;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>e)</Text>
                        <Text style={styles.text}>Usos investigativos e industriales. Es el empleo de la coca en procesos de investigación orientados a la adquisición de preceptos científicos dirigidos a distintos fines, así como la industrialización que persiga su transformación con la finalidad de añadirle valor agregado.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 14. (RECONOCIMIENTO CULTURAL)</Text>
                    <Text style={styles.text}>El Estado Plurinacional de Bolivia reconoce el uso de la coca dentro de las técnicas, prácticas, valores, ritos y ceremonias realizadas por la cultura Kallawaya, Aymara, Quechua y otras.</Text>
                </View>

                <Text style={styles.title2}>CAPITULO III</Text>
                <Text style={styles.title2}>PRODUCCIÓN</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 15.(ZONIFICACIÓN)</Text>
                    <Text style={styles.text}>Para efectos de la presente Ley, se definen y delimitan las siguientes zonas:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>a)</Text>
                        <Text style={styles.text}>Zonas autorizadas;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>b)</Text>
                        <Text style={styles.text}>Zona no autorizada.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 16.(ZONAS AUTORIZADAS DE PRODUCCION DE COCA)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>Las zonas autorizadas comprenden las zonas de producción originaria y ancestral, las zonas de producción originaria y ancestral con registro y catastro, y las zonas con registro y catastro.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Las zonas autorizadas son aquellas en las que se produce coca para satisfacer necesidades de consumo, investigación e industrialización. Los cultivos de coca en estas zonas serán renovables y de por vida, sujeto al cumplimiento de la presente Ley.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>En el Departamento de La Paz, la zona autorizada de producción originaria y ancestral, está en parte de las Provincias Nor Yungas, Sud Yungas e Inquisivi. La zona de producción originaria y ancestral bajo registro y catastro, está en las Provincias Pedro Domingo Murillo, Ildefonso de las Muñecas y Franz Tamayo. La zona de producción bajo registro y catastro, está en parte de las Provincias Caranavi, Bautista Saavedra y Larecaja (Poroma y Santa Rosa de Mapiri) y parte del Municipio de La Asunta de la Provincia Sud Yungas. La zona de producción originaria y ancestral, así como la zona de producción con registro y catastro, están establecidas y delimitadas mediante ubicación geográfica y coordenadas georeferenciadas, conforme a convenios suscritos vigentes.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>IV.</Text>
                        <Text style={styles.text}>En el Departamento de Cochabamba, la zona autorizada de producción bajo registro y catastro, está en parte de las Provincias Chapare, Carrasco y Tiraque.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>V.</Text>
                        <Text style={styles.text}>En el marco del consumo tradicional, los usos medicinales, rituales, sociales, económicos, comunitarios, alimenticios, investigativos, industriales, la exportación y la dinamización laboral e integralidad con la Madre Tierra, las zonas de producción de coca autorizada y delimitada por el Estado, serán de hasta 22.000 hectáreas. En el Departamento de La Paz con una superficie total de hasta 14.300 hectáreas, y en el Departamento de Cochabamba con una superficie total de hasta 7.700 hectáreas.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 17.(ZONA NO AUTORIZADA)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>La zona no autorizada es aquella que se encuentra fuera de la delimitación de las zonas autorizadas de producción de coca.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Queda prohibida la producción de coca en la zona no autorizada, sujeta a erradicación por el Ministerio de Gobierno en coordinación con el Ministerio de Desarrollo Rural y Tierras, sin perjuicio de la sanción penal y agravante cuando se trate de Áreas Protegidas y Reservas Forestales, conforme a Ley específica.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 18.(PRODUCCIÓN EXCEDENTARIA EN ZONAS AUTORIZADAS)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>La producción de coca excedentaria al interior de las zonas autorizadas bajo registro y catastro, estará sujeta a racionalización y a las sanciones administrativas correspondientes, conforme a reglamentación específica.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, promoverá la concertación en los procesos de racionalización, con los productores de coca; y el Ministerio de Gobierno ejecutará la racionalización.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 19.(RENOVACIÓN DEL CULTIVO DE COCA)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>En las zonas de producción autorizadas bajo registro y catastro, la renovación del cultivo de coca consiste en la habilitación de una nueva parcela en sustitución de la parcela en rotación para su descanso y recuperación. Deberá realizarse previa autorización del Ministerio de Desarrollo Rural y Tierras.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Se prohíbe la producción simultánea de ambas parcelas.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 20. (REGISTRO DE PRODUCTORES DE COCA)</Text>
                    <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, implementará a través de la Dirección General de Desarrollo Integral de las Regiones Productoras de Coca – DIGPROCOCA, el Registro de Productores de Coca, previa acreditación de la organización de productores de coca, sujeto a reglamentación específica.</Text>
                </View>

                <Text style={styles.title2}>CAPITULO IV</Text>
                <Text style={styles.title2}>COMERCIALIZACIÓN, CIRCULACIÓN Y TRANSPORTE</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 21.(REGULACIÓN Y FISCALIZACIÓN DE LA COMERCIALIZACIÓN)</Text>
                    <Text style={styles.text}>Se declara de prioridad nacional la revalorización de la coca, el Estado Plurinacional de Bolivia, a través de las entidades competentes, generará e implementará políticas públicas para:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El reconocimiento y la recuperación de la identidad y esencia histórica de la coca;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>1.</Text>
                        <Text style={styles.text}>Promover las cualidades de la coca en su estado natural, así como de sus derivados, a nivel nacional e internacional;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>2.</Text>
                        <Text style={styles.text}>Fiscalizar el origen y destino de la hoja de coca, estableciendo las rutas de circulación, desde los centros de producción a los mercados autorizados y de éstos hasta su destino final para el consumo;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>3.</Text>
                        <Text style={styles.text}>Regular las cantidades de hoja de coca para la comercialización, transporte y porte desde los centros de producción a los mercados autorizados y de éstos hasta su destino final para el consumo.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>La hoja de coca en su estado natural que sea transportada por cualquier medio desde el centro de producción hasta su destino final, deberá pasar por los puestos de control determinados por el Ministerio de Desarrollo Rural y Tierras.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>Los productores de la coca debidamente registrados, podrán transportar y comercializar desde las zonas de producción autorizadas a los mercados autorizados, de acuerdo a reglamentación.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 22. (RECONOCIMIENTO DEL PRODUCTOR AL DETALLE Y COMERCIANTE AL DETALLE)</Text>
                    <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, es el único que reconoce la condición de productora o productor al detalle o comerciante al detalle de la hoja de coca.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 23. (REGISTRO ÚNICO DE PRODUCTORES AL DETALLE Y COMERCIANTES AL DETALLE DE LA HOJA DE COCA)</Text>
                    <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, implementará el Registro Único de Productores al Detalle y de Comerciantes al Detalle de la hoja de coca. Su regulación se regirá mediante reglamentación específica.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 24.(MERCADOS AUTORIZADOS DE LA HOJA DE COCA)</Text>
                    <Text style={styles.text}>Se declara de prioridad nacional la revalorización de la coca, el Estado Plurinacional de Bolivia, a través de las entidades competentes, generará e implementará políticas públicas para:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, es el único que autoriza, controla y regula los mercados de la hoja de coca.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Se reconoce en el Departamento de La Paz, el Mercado de la Asociación Departamental de Productores de Coca – ADEPCOCA, y en el Departamento de Cochabamba, el Mercado de Sacaba.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>CAPITULO V</Text>
                <Text style={styles.title2}>INVESTIGACIÓN E INDUSTRIALIZACIÓN</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 25.(INVESTIGACIÓN E INDUSTRIALIZACIÓN)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El Estado promoverá la investigación y la industrialización de la coca con fines lícitos en los ámbitos público y privado a través de políticas, planes, programas y proyectos.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>La utilización de la coca como materia prima para la industria, deberá cumplir la trazabilidad técnica.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>El Estado regulará, controlará y fiscalizará el uso adecuado de la coca en los procesos de investigación e industrialización.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>IV.</Text>
                        <Text style={styles.text}>El Estado promoverá la apertura de mercados y el consumo de los productos industrializados derivados de la coca.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 26.(AUTORIZACIÓN PARA FINES INDUSTRIALES)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, autorizará a las empresas dedicadas a la industrialización de coca, la adquisición, circulación y transporte de coca en su estado natural.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, y el Ministerio de Desarrollo Productivo y Economía Plural, mediante reglamentación fijarán procedimientos específicos que incidan en el cumplimiento de las normas de calidad para su industrialización.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>Los residuos industriales de coca estarán sujetos a control periódico de la concentración de alcaloides, debiendo garantizarse medios y métodos adecuados de disposición final, por parte de las entidades competentes.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>IV.</Text>
                        <Text style={styles.text}>La disposición de residuos sólidos y líquidos procedentes de la industrialización de la coca, se sujetará a las normas ambientales vigentes a cargo del Ministerio de Medio Ambiente y Agua, en coordinación con las entidades competentes.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 27.(PROMOCIÓN DE LA COCA EN EL ÁMBITO INTERNACIONAL)</Text>
                    <Text style={styles.text}>El nivel central del Estado en todos los ámbitos internacionales promoverá:
                    </Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>1.</Text>
                        <Text style={styles.text}>La despenalización de la coca, por su valor socio económico, así como tradicional ancestral de los pueblos indígena originarios;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>2.</Text>
                        <Text style={styles.text}>La apertura de mercados de productos industrializados de la coca, en el marco de los acuerdos y convenios internacionales.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>CAPITULO VI</Text>
                <Text style={styles.title2}>INFRACCIONES Y SANCIONES</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 28.(INFRACCIONES Y SANCIONES)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>La persona que produzca, comercialice, transporte, porte o industrialice coca al margen de las regulaciones previstas en la presente Ley y su reglamentación, estará sujeta a las sanciones administrativas establecidas en reglamentación específica, sin perjuicio de otras sanciones previstas por Ley.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Las infracciones administrativas serán catalogadas como leves, graves y gravísimas; las mismas serán sancionadas con multas, decomisos, suspensión temporal o cancelación de la licencia o autorización, sujeto a reglamentación.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>La hoja de coca incautada o decomisada proveniente de actividades ilícitas o en estado de descomposición, será incinerada por la autoridad competente.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>IV.</Text>
                        <Text style={styles.text}>En caso de sanciones administrativas, la coca decomisada podrá ser destinada a procesos de revalorización con carácter cultural y social, investigación, producción de abono o incineración, de acuerdo a reglamentación.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>V.</Text>
                        <Text style={styles.text}>El Ministerio de Gobierno en coordinación con el Ministerio de Desarrollo Rural y Tierras, realizará el decomiso de la coca en caso que no cumpla las disposiciones establecidas en la presente Ley y sus reglamentos.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>VI.</Text>
                        <Text style={styles.text}>El procedimiento de retención, decomiso y disposición de la hoja de coca en su estado natural, será establecido mediante reglamentación específica.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>CAPITULO VII</Text>
                <Text style={styles.title2}>INSTITUCIONALIDAD</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 29. (CONSEJO NACIONAL DE REVALORIZACIÓN, PRODUCCIÓN, COMERCIALIZACIÓN, INDUSTRIALIZACIÓN E INVESTIGACIÓN DE LA COCA)</Text>
                    <Text style={styles.text}>El Consejo Nacional de Revalorización, Producción, Comercialización, Industrialización e Investigación de la Coca - CONCOCA, es el máximo organismo de definición de políticas nacionales de revalorización, producción, comercialización, investigación e industrialización de la coca.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 30.(COMPOSICIÓN)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El CONCOCA está integrado por:
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>a)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Desarrollo Rural y Tierras;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>b)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Relaciones Exteriores;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>c)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Desarrollo Productivo y Economía Plural;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>d)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Salud;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>e)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Culturas y Turismo;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>f)</Text>
                        <Text style={styles.text}>La Ministra o el Ministro de Gobierno;
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>g)</Text>
                        <Text style={styles.text}>Un (1) representante de las organizaciones sociales matrices de productores de coca, por departamento productor.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>El CONCOCA será presidido por la Ministra o el Ministro de Desarrollo Rural y Tierras. Sus atribuciones y funcionamiento serán establecidos mediante reglamentación específica.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>III.</Text>
                        <Text style={styles.text}>Los Ministros establecidos en el Parágrafo I del presente Artículo, podrán delegar expresamente a una Viceministra o un Viceministro de su Cartera de Estado.
                        </Text>
                    </View>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTICULO 31.(SECRETARÍA DE COORDINACIÓN TÉCNICA)</Text>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El Viceministerio de Coca y Desarrollo Integral, dependiente del Ministerio de Desarrollo Rural y Tierras, ejercerá la Secretaría de Coordinación Técnica del CONCOCA, con el objeto de coordinar, gestionar y apoyar su funcionamiento, así como su relacionamiento con otras instancias involucradas.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Los recursos económicos destinados a la definición de políticas y estrategias nacionales de revalorización, producción, comercialización, investigación e industrialización de la coca, serán canalizados a través de la Secretaría de Coordinación Técnica del CONCOCA.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>CAPITULO VIII</Text>
                <Text style={styles.title2}>CENTRO DE INVESTIGACIÓN INTEGRAL DE LA COCA</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 32. (CUALIDADES DE LA COCA)</Text>
                    <Text style={styles.text}>La coca es un producto natural bio-sinergético que no genera dependencia y debido a sus cualidades restauradoras de las membranas celulares del organismo y sus componentes fitoquímicos, es utilizada en la medicina, alimentación, industria y otros, convirtiéndose en una alternativa de prevención y tratamiento natural para la sociedad.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 33. (CENTRO DE INVESTIGACIÓN INTEGRAL DE LA COCA)</Text>
                    <Text style={styles.text}>Se constituye el Centro de Investigación Integral de la Coca del Ministerio de Desarrollo Rural y Tierras, con el objeto de realizar investigaciones y el desarrollo tecnológico productivo en coca, recuperando los saberes y conocimientos ancestrales de los pueblos y comunidades.</Text>
                </View>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 34. (COORDINACIÓN)</Text>
                    <Text style={styles.text}>El Estado podrá coordinar con universidades, centros de investigación e institutos nacionales e internacionales, para la investigación e industrialización de los principios activos de la coca.</Text>
                </View>

                <Text style={styles.title2}>CAPITULO IX</Text>
                <Text style={styles.title2}>TASA</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ARTÍCULO 35. (TASA ADMINISTRATIVA A LA COCA)</Text>
                    <Text style={styles.text}>Se establece la tasa administrativa a la coca que cobrará el Ministerio de Desarrollo Rural y Tierras, por concepto de servicios administrativos de regulación, fiscalización y control a la comercialización e industrialización de la hoja de coca. El cálculo, condiciones y aplicación de la tasa administrativa, serán definidos mediante reglamentación específica.</Text>
                </View>

                <Text style={styles.title2}>DISPOSICIONES TRANSITORIAS</Text>

                <View style={styles.article}>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>PRIMERA</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>El Fondo Nacional de Desarrollo Alternativo – FONADAL, será sustituido por el Fondo Nacional de Desarrollo Integral – FONADIN, bajo dependencia del Ministerio de Desarrollo Rural y Tierras. Su naturaleza jurídica, finalidades y funciones serán establecidas mediante Decreto Supremo en el plazo máximo de noventa (90) días calendario.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>A los fines de la presente Ley y en tanto se cumplan los procedimientos administrativos pertinentes, se mantienen vigentes las disposiciones que regulan el funcionamiento del FONADAL.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>SEGUNDA</Text>
                        <Text style={styles.text}>En un plazo máximo de ciento ochenta (180) días calendario a partir de la publicación de la presente Ley, se reglamentará la aplicación del Centro de Investigación Integral de la Coca.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>TERCERA</Text>
                        <Text style={styles.text}>Mientras el Ministerio de Desarrollo Rural y Tierras reglamente la aplicación de las tasas administrativas de la coca, la Dirección General de Comercialización e Industrialización de la Hoja de Coca – DIGCOIN, se financiará bajo su estructura actual de ingresos.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>CUARTA</Text>
                        <Text style={styles.text}>Se mantienen vigentes todas las disposiciones reglamentarias de la hoja de coca en su estado natural, hasta que el Órgano Ejecutivo apruebe los reglamentos específicos a la presente Ley.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>QUINTA</Text>
                        <Text style={styles.text}>La coca decomisada antes de la vigencia de la presente Ley y que se encuentra bajo custodia del Ministerio de Desarrollo Rural y Tierras, deberá ser incinerada en el plazo y forma previsto en reglamentación específica.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>SEXTA</Text>
                        <Text style={styles.text}>Las zonas autorizadas de producción bajo registro y catastro de las Provincias Larecaja y Bautista Saavedra del Departamento de La Paz, serán delimitadas en reglamento.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}>DISPOSICIÓN FINAL</Text>

                <View style={styles.article}>
                    <Text style={styles.subtitle}>ÚNICA.</Text>
                    <Text style={styles.text}>El Ministerio de Desarrollo Rural y Tierras, en coordinación con las instancias competentes, en el plazo de ciento ochenta (180) días calendario a partir de la publicación de la presente Ley, deberá elaborar los reglamentos.</Text>
                </View>

                <Text style={styles.title2}>DISPOSICIÓN DEROGATORIA Y ABROGATORIA</Text>

                <View style={styles.article}>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>ÚNICA.</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>I.</Text>
                        <Text style={styles.text}>Se derogan los Artículos 1 al 31 de la Ley N° 1008 de 19 de julio 1988, del Régimen de la Coca y Sustancias Controladas.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subtitle}>II.</Text>
                        <Text style={styles.text}>Quedan abrogadas todas las disposiciones contrarias a la presente Ley.
                        </Text>
                    </View>
                </View>

                <Text style={styles.title2}></Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        color: CustomColors.primary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    title2: {
        textAlign: 'center',
        color: CustomColors.black,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    },
    article: {
        marginTop: 10
    },
    subtitle: {
        color: CustomColors.black,
        fontWeight: 'bold',
        marginBottom: 5,
        marginRight: 5
    },
    section: {
        flexDirection: 'row'
    },
    text: {
        marginBottom: 5,
        paddingRight: 5
    }
})

export default Law