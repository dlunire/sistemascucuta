<script>
    import IconBio from "../../icons/IconBio.svelte";
    import IconColombia from "../../icons/IconColombia.svelte";
    import IconCorrisive from "../../icons/IconCorrisive.svelte";
    import IconExploit from "../../icons/IconExploit.svelte";
    import IconFlammable from "../../icons/IconFlammable.svelte";
    import IconToxic from "../../icons/IconToxic.svelte";
    import Logo from "../../icons/Logo.svelte";
    import Logotipo from "../../icons/Logotipo.svelte";
    import Pattern from "../../icons/Pattern.svelte";
</script>

<section class="section section--about" id="about-1">
    <div class="section__inner section__inner--columns">
        <article
            class="article article--left section__article section__article--left"
        >
            <div>
                <section class="article__section article__section--logo">
                    <div class="article__logo">
                        <Logo />
                    </div>
                </section>

                <section class="article__section">
                    <p>
                        Transporte, recolección y disposición final de residuos
                        con características de peligrosidad.
                    </p>

                    <ul class="article__items">
                        <li class="article__item">
                            <IconBio />
                            <span>Biológico e Infeccioso</span>
                        </li>

                        <li class="article__item">
                            <IconToxic />
                            <span>Toxicidad</span>
                        </li>

                        <li class="article__item">
                            <IconCorrisive />
                            <span>Corrosividad</span>
                        </li>

                        <li class="article__item">
                            <IconFlammable />
                            <span>Inflamabilidad</span>
                        </li>

                        <li class="article__item">
                            <IconExploit />
                            <span>Explosividad</span>
                        </li>
                    </ul>
                </section>

                <section class="article__section article__section--map">
                    <div>
                        <IconColombia />
                        <p>EMPRESA 100% NORTESANTANDEREANA</p>
                    </div>
                </section>
            </div>
        </article>

        <article class="section__article section__article--logo">
            <Logotipo />
        </article>
    </div>

    <Pattern />
</section>

<style lang="scss">
    .article {
        display: flex;
        align-items: center;
        justify-content: center;

        &__item {
            padding-left: 0;
        }
    }
</style>
