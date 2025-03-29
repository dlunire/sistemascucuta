<script lang="ts">
    import type { Menu } from "../../../lib/interface/menu";
    import IconAddress from "../../icons/IconAddress.svelte";
    import IconCodigosdelFuturo from "../../icons/IconCodigosdelFuturo.svelte";
    import IconContact from "../../icons/IconContact.svelte";
    import IconEmail from "../../icons/IconEmail.svelte";
    import IconFacebook from "../../icons/IconFacebook.svelte";
    import IconForm from "../../icons/IconForm.svelte";
    import IconInstagram from "../../icons/IconInstagram.svelte";
    import IconLInk from "../../icons/IconLInk.svelte";
    import IconMenuItem from "../../icons/IconMenuItem.svelte";
    import IconPortfolio from "../../icons/IconPortfolio.svelte";
    import IconSocialMedia from "../../icons/IconSocialMedia.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import Logo from "../../icons/Logo.svelte";
    export let menu: Menu[] = [];
</script>

<footer class="footer">
    <div class="footer__inner">
        <div class="footer__item">
            <a href="#home" class="footer__logo">
                <Logo />
            </a>

            <h2 class="footer__title">
                <IconContact />
                <span>Información de contacto</span>
            </h2>

            <ul class="footer__menu">
                <li class="footer__list footer__list--item">
                    <IconWhatsApp />
                    <span>300 439 8344</span>
                </li>

                <li class="footer__list footer__list--item">
                    <IconEmail />
                    <span>norsire.2020@gmail.com</span>
                </li>

                <li class="footer__list footer__list--item">
                    <IconAddress />
                    <span>Calle 6n #12e 28-1 Urb. Los Acacios</span>
                </li>
            </ul>
        </div>
        <div class="footer__item">
            <h2 class="footer__title">
                <IconMenuItem />
                <span>Menú principal</span>
            </h2>
            <ul class="footer__menu">
                {#each menu as item}
                    <li class="footer__list">
                        <a
                            href={item.link}
                            aria-label={item.label}
                            class="footer__menu-link"
                        >
                            {#if item.icon}
                                <svelte:component this={item.icon} />
                            {/if}
                            <span>
                                {item.label}
                            </span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <div class="footer__item">
            <h2 class="footer__title">
                <IconLInk />
                <span>Enlaces externos</span>
            </h2>

            <ul class="footer__menu">
                <li class="footer__list">
                    <a
                        href="https://drive.google.com/file/d/18ovkKrJatJdvUdNifLplUBV2SsTjjcCV/view"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconPortfolio />
                        <span>Portafolio</span>
                    </a>
                </li>

                <li class="footer__list">
                    <a
                        href="https://drive.google.com/file/d/1jLmSbZ3H8TutQbmLx67Wbue0r4Q5-H_H/view"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconPortfolio />
                        <span>Formato de propuesta económica</span>
                    </a>
                </li>

                <li class="footer__list">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd-E2T6CjR2leReUoF16Ku_klbpUykN2G0LJpG-iCnPkbP06w/viewform"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconForm />
                        <span>Formulario de contacto</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="footer__item">
            <h2 class="footer__title">
                <IconSocialMedia />
                <span>Redes Sociales</span>
            </h2>

            <ul class="footer__menu footer__menu--social-media">
                <li class="footer__list footer__list--social-media">
                    <a
                        href="https://www.instagram.com/norsireesp"
                        class="footer__menu-link footer__menu-link--socialmedia"
                        aria-label="Instagram"
                        rel="nofollow"
                        target="_blank"
                        data-social-media="instagram"
                    >
                        <IconInstagram />
                        <span>Instagram</span>
                    </a>
                </li>

                <li class="footer__list footer__list--social-media">
                    <a
                        href="https://web.facebook.com/profile.php?id=61572988453042"
                        class="footer__menu-link footer__menu-link--socialmedia"
                        aria-label="Instagram"
                        rel="nofollow"
                        target="_blank"
                        data-social-media="facebook"
                    >
                        <IconFacebook />
                        <span>Facebook</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer__author">
        Desarrollado por
        <a
            href="https://dlunire.pro/"
            target="_blank"
            aria-label="Códigos del Futuro"
        >
            <IconCodigosdelFuturo />
            <span>Códigos del Futuro</span>
        </a>
    </div>
</footer>
