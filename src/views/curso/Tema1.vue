<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El contexto histórico del rol del Estado en el desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Comprender el papel que desempeña el Estado en el desarrollo económico y social, requiere analizar su evolución histórica, moldeada por diversas corrientes de pensamiento político, económico y jurídico. El Estado no ha ocupado siempre el mismo lugar dentro de la estructura social: su presencia, funciones y legitimidad, han sido objeto de intensos debates, sobre todo en contextos de crisis o transformación. Por ello, antes de abordar los desafíos contemporáneos, es esencial situarse en los momentos claves que marcaron la redefinición del rol estatal en el siglo XX.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Liberalismo clásico")
            p Predominante durante buena parte de la historia moderna. Postula un Estado limitado a funciones básicas: garantizar el orden, la seguridad y el cumplimiento de contratos. Esta visión fue impulsada por el pensamiento liberal clásico, que defendía una intervención mínima en la economía, confiando en que el libre mercado conduciría al bienestar colectivo, sin necesidad de interferencia estatal.
    
          .div(titulo="Estado de bienestar")
            p Surge como respuesta a los efectos sociales negativos de las revoluciones industriales, las guerras mundiales y la Gran Depresión de 1929. El Estado, asume un rol activo en la regulación económica, el mercado laboral y la provisión de servicios públicos. Se consolida la idea de garantizar los derechos sociales, actuando como protector de la ciudadanía, frente a las desigualdades estructurales.
    
          .div(titulo="Neoliberalismo")
            p Se expande durante las décadas de 1970 y 1980, frente a crisis como la inflación, el endeudamiento externo y la ineficiencia administrativa. Promueve la reducción del gasto público, la privatización de empresas estatales y una creciente desregulación de los mercados. El Estado es visto como una estructura ineficiente y se plantea su retirada parcial de funciones, que asumía anteriormente. Sin embargo, también mostró limitaciones estructurales.
    
          .div(titulo="Estado eficaz (BM, 1997)")
            p Propuesta del Informe de 1997 sobre el Desarrollo Mundial, elaborado por el Banco Mundial. Defiende un Estado activo, pero ajustado a su capacidad institucional, capaz de intervenir cuando sea necesario y eficaz en la provisión de bienes públicos. Rechaza tanto, la ineficiencia del modelo estatista como la pasividad del enfoque neoliberal. El objetivo es garantizar derechos y promover el desarrollo sostenible.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estudiar el rol del Estado implica, por tanto, revisar estas transformaciones históricas y comprender su influencia en las actuales formas de concebir y aplicar las políticas públicas. En este proceso, el Derecho no actúa como un espectador pasivo: constituye una herramienta fundamental para regular, organizar y legitimar, la acción estatal.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Evolución del pensamiento sobre el Estado en el siglo XX
    
    p Comprender cómo ha evolucionado el pensamiento sobre el Estado, permite analizar mejor las dinámicas actuales de gobernabilidad y políticas públicas. A lo largo del siglo XX, el rol estatal fue reformulado en función de los contextos históricos y los marcos ideológicos predominantes. A continuación, se presentan los principales modelos de Estado que marcaron este siglo.
    p.mb-4 Las principales concepciones del Estado en el siglo XX, son: 

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Estado liberal clásico
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Predominante a inicios del siglo XX.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Enfocado en libertades individuales y propiedad privada.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mínima intervención estatal.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Confianza en el mercado, como regulador natural.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Estado keynesiano
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Surge tras la Gran Depresión (1929).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Inspirado en John Maynard Keynes.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 El Estado interviene activamente para sostener la demanda agregada.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Políticas de empleo, inversión pública y gasto social.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Estado de bienestar
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Consolidado durante las décadas de 1940-1950.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Se institucionalizan los derechos sociales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Servicios universales: educación, salud, seguridad social.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 El Estado redistribuye la riqueza y corrige las fallas del mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Estado neoliberal
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Emergente desde los años 70.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Respuesta a crisis fiscales y estanflación.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reducción del gasto público y del tamaño del Estado.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Privatizaciones y liberalización de mercados.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Influencia del FMI y el Banco Mundial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7
              h5 Estado eficaz
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Propuesto por el Banco Mundial en 1997.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 No promueve el intervencionismo pleno, pero sí la eficiencia institucional.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Enfocado en funciones básicas y alianzas estratégicas, para el desarrollo sostenible.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A lo largo del siglo XX, distintas concepciones del Estado, han expresado tensiones claves sobre su rol, su relación con el mercado y su vínculo con la sociedad. La siguiente comparación sintetiza esas diferencias, a partir de cinco dimensiones fundamentales.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tensión entre modelos: claves para el análisis
    .tabla-a.color-acento-botones.mb-3
      table
        thead
          tr
            th.bg-color-5 Dimensión
            th.bg-color-5 Estado liberal
            th.bg-color-5 Estado de bienestar / keynesiano
            th.bg-color-5 Estado neoliberal
            th.bg-color-5 Estado eficaz
        tbody
          tr
            td.text-bold Rol del Estado
            td Mínimo.
            td Intervencionista.
            td Limitado.
            td Funcional y adaptado.
          tr
            td.text-bold Visión del mercado
            td Autorregulado.
            td Con fallas que deben corregirse.
            td Principal motor del desarrollo.
            td Complementario al Estado.
          tr
            td.text-bold Derechos sociales
            td Garantía privada / mínima estatal.
            td Universales y garantizados por el Estado.
            td Responsabilidad individual.
            td Coordinación con otros actores.
          tr
            td.text-bold Legitimidad
            td Basada en libertad individual.
            td Basada en justicia social.
            td Basada en eficiencia económica.
            td Basada en eficacia institucional.
          tr
            td.text-bold Relación con actores
            td Individualismo.
            td Participación estatal centralizada.
            td Mercado como actor central.
            td Estado como articulador de alianzas.
    
    p.mb-4 Analizar esta evolución histórica permite:

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-4.order-2
            img(src="@/assets/curso/tema1/10.svg").mx-auto
          .col-lg-8.order-1.mb-3.mb-lg-0
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Entender las tensiones entre eficiencia y equidad, entre mercado y derecho, y entre gobernabilidad y legitimidad democrática.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Contar con herramientas conceptuales para diseñar, implementar y evaluar políticas públicas, con enfoque en derechos humanos y justicia social.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] La crítica al Estado mínimo y el surgimiento del modelo de Estado eficaz
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") A lo largo del siglo XX, el pensamiento sobre el Estado ha estado marcado por distintas tensiones conceptuales. Estas tensiones reflejan visiones divergentes sobre el papel que debe desempeñar el Estado en la sociedad, su relación con el mercado, y su legitimidad frente a la ciudadanía. A continuación, se analizan los principales modelos que han guiado la acción estatal organizados, según cinco dimensiones fundamentales: rol del Estado, visión del mercado, derechos sociales, legitimidad y relación con otros actores.

        h2.mb-3(data-aos="fade-left") El Estado liberal: la mínima intervención como principio
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este modelo, predominante a comienzos del siglo XX, defendía una visión del Estado, centrada en la protección de libertades individuales y la no intervención en los asuntos económicos y sociales. Se confiaba plenamente en las capacidades autorreguladoras del mercado.
    
    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Rol del Estado
                p.text-center Mínimo. Se limita a funciones básicas como seguridad, protección de la propiedad y garantía de contratos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Visión del mercado
                p.text-center El mercado se considera un mecanismo eficiente y natural para asignar recursos, sin necesidad de intervención estatal.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Derechos sociales
                p.text-center No son vistos como responsabilidad estatal. El acceso depende de las capacidades individuales y del sector privado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Legitimidad
                p.text-center Basada en la defensa de la libertad individual y la mínima interferencia estatal, en los asuntos económicos y privados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Relación con actores
                p.text-center Predomina el individualismo. No se promueven relaciones colectivas ni la participación activa de otros sectores, por parte del Estado.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/13.png', alt='')
        
        h2(data-aos="fade-left") El Estado de bienestar / keynesiano: intervención para la equidad
        p.mb-5 Este modelo surgió como respuesta a las fallas del liberalismo clásico, especialmente tras la Gran Depresión de 1929. Inspirado en las ideas de John Maynard Keynes, propuso una intervención activa del Estado para estabilizar la economía y promover la justicia social.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Rol del Estado")
            p Intervencionista. Desempeña un papel central en la regulación económica y en la provisión de servicios públicos.
    
          .div(titulo="Visión del mercado")
            p Reconoce fallas del mercado que deben ser corregidas mediante políticas fiscales, laborales y sociales.
    
          .div(titulo="Derechos sociales")
            p Se consideran universales y deben ser garantizados por el Estado, mediante políticas públicas sólidas.
    
          .div(titulo="Legitimidad")
            p Se basa en la capacidad del Estado para reducir desigualdades, asegurar derechos y fortalecer la cohesión social.
          .div(titulo="Relación con actores")
            p El Estado centraliza decisiones y ejecución, aunque admite el rol de sindicatos y organizaciones sociales en la formulación y acompañamiento de políticas.
    
    h2(data-aos="fade-left") El Estado neoliberal: el retorno al mercado
    p.mb-5 A partir de la década de 1970, este enfoque se impuso como respuesta a las crisis fiscales y al agotamiento del modelo keynesiano. Promueve una reducción drástica del papel del Estado y una revalorización del mercado como eje del desarrollo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Rol del Estado
              p Limitado. Su papel consiste en crear condiciones favorables para la libre competencia y la inversión privada.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Visión del mercado
              p El mercado es considerado el motor principal del desarrollo y debe funcionar sin trabas regulatorias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Derechos sociales
              p Se entienden como responsabilidad individual. El acceso a ellos depende de la capacidad económica de cada persona.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Legitimidad
              p Se fundamenta en la eficiencia económica, el control del gasto público y la reducción del tamaño del Estado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Relación con actores
              p El mercado toma protagonismo. El Estado transfiere funciones al sector privado y fomenta su participación en servicios anteriormente públicos.
    
    h2(data-aos="fade-left") El Estado eficaz: eficiencia con responsabilidad pública
    p.mb-5 A fines del siglo XX, el modelo neoliberal mostró importantes limitaciones, como el debilitamiento de los servicios públicos y el aumento de la exclusión social. En este contexto, surgió una visión centrada en la eficacia del Estado, sin volver necesariamente al intervencionismo pleno.
  
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/25.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.5%" y="21%" numero="+")
                h5 Rol del Estado
                p Funcional y adaptado. Su legitimidad no depende del tamaño, sino de su capacidad para cumplir funciones clave con buenos resultados.
    
              .bg-color-white.box-shadow.p-3(x="24%" y="21%" numero="+")
                h5 Visión del mercado
                p Es un complemento del Estado. Ambos deben colaborar para lograr metas comunes como el desarrollo sostenible.
    
              .bg-color-white.box-shadow.p-3(x="59%" y="21%" numero="+")
                h5 Derechos sociales
                p Se garantizan a través de la acción coordinada entre el Estado, la sociedad civil y el sector privado.
    
              .bg-color-white.box-shadow.p-3(x="76%" y="21%" numero="+")
                h5 Legitimidad
                p Deriva de la capacidad del Estado para enfrentar problemas públicos con transparencia y resultados concretos.
    
              .bg-color-white.box-shadow.p-3(x="92%" y="21%" numero="+")
                h5 Relación con actores
                p El Estado impulsa alianzas estratégicas, fomenta la corresponsabilidad y promueve una gobernanza basada en la colaboración entre sectores.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/265093 " target="_blank" rel="noopener noreferrer") Buendía Espinosa, A. (Coord.). (2020). Universidades públicas: coincidencias, diferencias y pendientes frente a las políticas públicas. Editorial Miguel Ángel Porrúa. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://minciencias.gov.co/glosario/politica-publica-o-estado " target="_blank" rel="noopener noreferrer") Ministerio de Ciencia, Tecnología e Innovación. (s.f.). Política pública o de Estado. Ministerio de Ciencia, Tecnología e Innovación. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-URwDZZOIPI" target="_blank" rel="noopener noreferrer") Contraloría General del Estado - Bolivia. (2020). Módulo 1 POLÍTICAS PÚBLICAS - CENCAP [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
