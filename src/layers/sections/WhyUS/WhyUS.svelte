<script lang="ts">
    import IconComputer from "../../icons/IconComputer.svelte";
    import IconWebDesign from "../../icons/IconWebDesign.svelte";
    import WhyUsContent from "./WhyUSContent.svelte";
</script>

<section class="section section--why-us" id="about">
    <div class="section__inner">
        <div class="section__title-container">
            <h2 class="section__title section__title--why-us">
                <span>¿Por qué elegirnos?</span>
            </h2>
            <p>El servicio de reparación más rápido al mejor precio.</p>
        </div>

        <div
            class="section__content section__content--why-us section__content--why-us-grid"
        >
            <div class="section__content-item">
                <header class="section__content-header">
                    <IconWebDesign />
                </header>

                <div class="section__content-content">
                    <h3 class="section__content-title">Diseño Web</h3>
                    <p>
                        ¡Convierte visitantes en clientes con un diseño web
                        atractivo y funcional!
                    </p>
                </div>
            </div>

            <div class="section__content-item">
                <header class="section__content-header">
                    <IconComputer />
                </header>

                <div class="section__content-content">
                    <h3 class="section__content-title">
                        Reparación de computadoras
                    </h3>
                    <p>
                        ¡Mejoramos el rendimiento de tu PC con mantenimiento
                        profesional!
                    </p>
                </div>
            </div>

            <div class="section__content-item">
                <header class="section__content-header">
                    <img src="./images/icons/i3.png" alt="Asesoría y Cursos" />
                </header>

                <div class="section__content-content">
                    <h3 class="section__content-title">Asesoría y Cursos</h3>
                    <p>
                        ¡Aprende con expertos y lleva tu conocimiento al
                        siguiente nivel!
                    </p>
                </div>
            </div>

            <div class="section__content-item">
                <header class="section__content-header">
                    <img
                        src="./images/icons/i4.png"
                        alt="Soluciones en Redes"
                    />
                </header>

                <div class="section__content-content">
                    <h3 class="section__content-title">Soluciones en Redes</h3>
                    <p>
                        ¡Diseñamos e implementamos redes seguras y eficientes
                        para tu negocio!
                    </p>
                </div>
            </div>
        </div>

        <div
            class="section__content section__content--why-us section__content--why-us-column"
        >
            <WhyUsContent />
        </div>
    </div>
</section>
