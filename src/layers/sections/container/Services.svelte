<script lang="ts">
    import IconService from "../../icons/IconService.svelte";

    /**
     * Captura el error que se produce al momento de cargar
     * @param event
     */
    function handleError(event: Event): void {
        const { target: image } = event;

        if (!(image instanceof HTMLImageElement)) {
            return;
        }

        image.src = "./images/image.svg";
        image.classList.add("image-error");
    }
</script>

<section class="section section--services" id="services">
    <div class="section__inner">
        <h2 class="section__title">
            <IconService />
            <span>Nuestros servicios</span>
        </h2>

        <div class="section__services">
            <article class="article article--services">
                <header class="article__header">
                    <img
                        src="./images/photos/recoleccion-segura.webp"
                        alt="Recolección Segura"
                        on:error={handleError}
                    />
                </header>

                <section class="article__container">
                    <h3 class="article__title">Recolección Segura</h3>
                    <div class="article__content">
                        <p>
                            Transporte Especializado para Residuos Especiales,
                            con Personal Capacitado.
                        </p>
                    </div>
                </section>
            </article>

            <article class="article article--services">
                <header class="article__header">
                    <img
                        src="./images/photos/disposicion-final.webp"
                        alt="Disposición Final"
                        on:error={handleError}
                    />
                </header>

                <section class="article__container">
                    <h3 class="article__title">Disposición Final</h3>
                    <div class="article__content">
                        <p>
                            Convenios Comerciales para la disposición segura de
                            los residuos, con el <strong
                                >Centro Inteligente de Gestión Ecológica
                                Guayabal</strong
                            >, licenciado bajo resolución 0450 de 2006
                        </p>

                        <ul>
                            <li>Ecoesteryl</li>
                            <li>Incineración</li>
                            <li>Celda de Seguridad</li>
                            <li>Y otros previamente autorizados</li>
                        </ul>
                    </div>
                </section>
            </article>

            <article class="article article--services">
                <header class="article__header">
                    <img
                        src="./images/photos/capacitacion.webp"
                        alt="Capacitacion"
                        on:error={handleError}
                    />
                </header>

                <section class="article__container">
                    <h3 class="article__title">Capacitación</h3>
                    <div class="article__content">
                        <p>
                            Entrenamiento en normas de seguridad y manejo de
                            residuos.
                        </p>
                    </div>
                </section>
            </article>

            <article class="article article--services">
                <header class="article__header">
                    <img
                        src="./images/photos/euro-06.webp"
                        alt="Euro 6"
                        on:error={handleError}
                    />
                </header>

                <section class="article__container">
                    <h3 class="article__title">Euro 6</h3>
                    <div class="article__content">
                        <p>
                            Cumplimos con la norma <strong>EURO 6</strong>, los
                            vehículos realizan un proceso de filtrado
                            transformando las emisiones en vapor de agua y
                            nitrógeno, con el fin de disminuir el impacto en el
                            medio ambiente.
                        </p>
                    </div>
                </section>
            </article>
        </div>
    </div>
</section>
