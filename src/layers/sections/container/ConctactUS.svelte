<script>
    import SectionTitle from "../../components/titles/SectionTitle.svelte";
    import IconContact from "../../icons/IconContact.svelte";
    import IconEmail from "../../icons/IconEmail.svelte";
    import IconForm from "../../icons/IconForm.svelte";
    import IconLocation from "../../icons/IconLocation.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import Pattern from "../../icons/Pattern.svelte";
</script>

<section class="section section--contact-us" id="contact">
    <div
        class="section__inner section__inner--contact-us section__inner--columns"
    >
        <article class="article article--left section__article">
            <section class="section__column">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.0312447516876!2d-72.4973!3d7.8918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66455f1f545b4b%3A0x442abe28ead977df!2sSISTEMASCUCUTA!5e0!3m2!1ses!2sco!4v1744678168406!5m2!1ses!2sco"
                    width="600"
                    height="450"
                    allowfullscreen={true}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación"
                ></iframe>
            </section>
        </article>

        <article
            class="article article--right section__article section__article--form"
        >
            <div>
                <SectionTitle title="Contáctanos">
                    Solicita tu asesoría gratis. Te ayudamos sin compromiso.
                </SectionTitle>
                <ul class="contact">
                    <li class="contact__item color color--whatsapp">
                        <IconWhatsApp />
                        <span>317 483 6272</span>
                    </li>

                    <li class="contact__item color color--email">
                        <IconEmail />
                        <span>marketing@sistemascucuta.com</span>
                    </li>

                    <li class="contact__item">
                        <IconLocation />
                        <span
                            >Av. 2 Este #6-19, Br. Popular, Cúcuta, Norte de
                            Santander</span
                        >
                    </li>
                </ul>
                <a
                    href="https://docs.google.com/forms/d/1Wl0-pP9GfsjtbF8U1HwTzWDKc4X13Q9keVxZvhezDV0/viewform?edit_requested=true"
                    target="_blank"
                    title="Enviar formulario"
                    aria-label="Enviar formulario"
                    class="button button--google-form"
                    rel="nofollow"
                >
                    <IconForm />
                    <span>Contáctanos</span>
                </a>
            </div>
        </article>
    </div>

    <Pattern />
</section>

<style>
    iframe {
        width: 100%;
        margin: 0;
        border: 0;
    }
</style>
