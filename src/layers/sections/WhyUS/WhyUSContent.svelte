<script lang="ts">
    import "./why-us.scss";
    import Details from "./Details.svelte";
    import IconFinancial from "../../icons/IconFinancial.svelte";
    import IconAirCraft from "../../icons/IconAirCraft.svelte";
    import IconPos from "../../icons/IconPOS.svelte";
    import IconLicense from "../../icons/IconLicense.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import Review from "./Review.svelte";

    const phone = "573174836272";
    const message = encodeURIComponent(
        "Hola, estoy interesado en una asesoría gratuita",
    );
    const waLink = `https://wa.me/${phone}?text=${message}`;
</script>

<!-- Columna de la izquierda en WhyUS -->
<div class="section__content-column">
    <Details title="Diseño Web">
        <p class="margin-0">
            <strong>En resumen:</strong><br />No solo desarrollamos páginas web;
            diseñamos experiencias digitales de alto nivel, respaldadas por un
            equipo experto y comprometido con el éxito de tu presencia en línea.
            ¡Transforma tu idea en una web profesional desde hoy!
        </p>

        <IconFinancial slot="icon" />
    </Details>

    <Details title="Asesoría en Marketing Digital">
        <p class="margin-0">
            <strong
                >Impulsa tu negocio con nuestra asesoría en Marketing Digital</strong
            >
        </p>
        <p class="margin-0">
            En un entorno digital en constante cambio, no es suficiente con
            simplemente estar en línea: necesitas destacar. Nuestra asesoría
            estratégica en marketing digital está diseñada para fortalecer tu
            marca, aumentar tus conversiones y maximizar tu presencia online con
            acciones concretas y medibles.
        </p>
        <IconAirCraft slot="icon" />
    </Details>

    <Details title="Software Contable POS">
        <p class="margin-0">
            Ventajas de trabajar con nuestro software de Inventario, Caja y POS
            En la gestión de un negocio, contar con un sistema eficiente y
            confiable marca la diferencia. Nuestro software de Inventario, Caja
            y POS ha sido diseñado para optimizar tu operación, aumentar la
            productividad y mejorar la rentabilidad de tu empresa, de forma
            Economica .
        </p>
        <IconPos slot="icon" />
    </Details>

    <Details title="Licencias Originales">
        <p class="margin-0">
            No pongas en riesgo tu equipo y tu información. Compra licencias
            Originales con nosotros y disfruta de un software confiable, seguro
            y siempre actualizado.
        </p>

        <ul>
            <li>Licenia de Microsoft Office 365 x 1 año.</li>
            <li>Licencia de Windows 10 u 11 Profesional.</li>
            <li>Licencia de Microsoft Office 2021 Original.</li>
            <li>Licencia de Software de Virtual DJ.</li>
            <li>Licencia de Software Autodeks, como AUTOCAD.</li>
        </ul>

        <IconLicense slot="icon" />
    </Details>

    <Review
        href="https://www.google.com/search?sca_esv=2dc50acae51cd50b&hl=es-419&authuser=0&sxsrf=AHTn8zrdXRoUH4SyVNOiQa1pBr-naH9seg%3A1744919446503&kgmid=%2Fg%2F11nfm_k1tj&q=SISTEMASCUCUTA&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F2"
        title="Clientes satisfechos que ya confiaron en nosotros"
    >
        <p>
            Mira nuestras valoraciones en Google y descubre por qué somos la
            elección de tantos clientes satisfechos.
        </p>
    </Review>
</div>

<!-- Barra lateral derecha en WhyUS -->
<aside class="section__content-sidebar">
    <section class="section__content-sticky">
        <h2 class="section__content-title">¿Por qué nos necesitas?</h2>

        <p>
            La tecnología es clave para la productividad y seguridad de
            cualquier negocio o usuario. Sin soporte adecuado, puedes enfrentar
            fallos, pérdida de datos y vulnerabilidades de seguridad.
        </p>

        <ul>
            <li>Optimiza el rendimiento de tus sistemas y equipos.</li>
            <li>Protege tu información contra virus y ataques.</li>
            <li>
                Minimiza fallos y tiempos de inactividad con soporte técnico.
            </li>
            <li>Automatiza y mejora procesos para mayor eficiencia.</li>
            <li>
                Ahorra costos evitando problemas y reparaciones innecesarias.
            </li>
        </ul>

        <p>
            📌 No esperes a que los problemas aparezcan. Mantén tu tecnología
            segura y operativa con servicios informáticos profesionales. 🚀.
        </p>

        <a
            href={waLink}
            title="Asesoría gratis"
            class="section__content-whatsapp"
            rel="nofollow"
            target="_blank"
        >
            <IconWhatsApp />
            <span>Asesoría Gratis</span>
        </a>
    </section>
</aside>

<style lang="scss">
    .margin {
        &-0 {
            margin: 0;
        }
    }

    p {
        line-height: 1.6;
    }
</style>
