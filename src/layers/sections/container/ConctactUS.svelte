<script>
    import IconContact from "../../icons/IconContact.svelte";
    import IconEmail from "../../icons/IconEmail.svelte";
    import IconForm from "../../icons/IconForm.svelte";
    import IconLocation from "../../icons/IconLocation.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import Pattern from "../../icons/Pattern.svelte";
</script>

<section class="section section--contact-us" id="contact">
    <section class="section__inner">
        <h2 class="section__title">
            <IconContact />
            <span>CONTACTO</span>
        </h2>
    </section>

    <div class="section__inner section__inner--columns">
        <article class="article section__article">
            <section class="section__column">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011716.425566044!2d-73.50348077599179!3d7.8932596686915755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6fb9e0ad23dcb7%3A0x30348f0607bf930b!2sNORSIRE%20ESP%20SAS!5e0!3m2!1ses-419!2sco!4v1742665694185!5m2!1ses-419!2sco"
                    width="600"
                    height="450"
                    style="border:0;"
                    allowfullscreen={true}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación"
                ></iframe>
            </section>
        </article>

        <article class="article section__article section__article--form">
            <div>
                <h2 class="article__title">Información de contacto</h2>
                <ul class="contact">
                    <li class="contact__item color color--whatsapp">
                        <IconWhatsApp />
                        <span>300 439 8344</span>
                    </li>

                    <li class="contact__item color color--email">
                        <IconEmail />
                        <span>norsire.2020@gmail.com</span>
                    </li>

                    <li class="contact__item">
                        <IconLocation />
                        <span>Calle 6n #12e 28-1 Urb. Los Acacios</span>
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
    }
</style>
