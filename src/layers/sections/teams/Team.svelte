<script lang="ts">
    import Profile from "./Profile.svelte";
    import "./team.scss";
</script>

<section class="section section--why-us" id="team">
    <div class="section__inner">
        <div class="section__title-container">
            <h2 class="section__title section__title--why-us">
                <span>Nuestro equipo</span>
            </h2>
            <p>
                Descubre a los profesionales detrás de cada solución. Nuestro
                equipo combina experiencia, compromiso y pasión por la
                tecnología para ofrecerte un servicio confiable y eficiente.
            </p>
        </div>

        <section class="section__content section__content--team">
            <div class="team">
                <Profile title="David Correa" image="david-correa.jpeg">
                    <span>Soporte Técnico Informático</span>
                </Profile>

                <Profile title="David E Luna M" image="dlunamontilla.jpeg">
                    <span>Software Developer</span>
                </Profile>

                <Profile
                    title="Francisco Berrera"
                    image="francisco-becerra.png"
                >
                    <span>Web Master</span>
                </Profile>

                <Profile
                    title="Sergio Vargas"
                    image="sergio-vargas-profile.webp"
                >
                    <span>Ingeniero de Sistemas</span>
                </Profile>
            </div>
        </section>
    </div>
</section>
