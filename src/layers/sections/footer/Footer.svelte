<script lang="ts">
    import type { Menu } from "../../../lib/interface/menu";
    import IconAddress from "../../icons/IconAddress.svelte";
    import IconCodigosdelFuturo from "../../icons/IconCodigosdelFuturo.svelte";
    import IconContact from "../../icons/IconContact.svelte";
    import IconEmail from "../../icons/IconEmail.svelte";
    import IconFacebook from "../../icons/IconFacebook.svelte";
    import IconForm from "../../icons/IconForm.svelte";
    import IconGitHub from "../../icons/IconGitHub.svelte";
    import IconInstagram from "../../icons/IconInstagram.svelte";
    import IconLInk from "../../icons/IconLInk.svelte";
    import IconLogoSolid from "../../icons/IconLogoSolid.svelte";
    import IconMenuItem from "../../icons/IconMenuItem.svelte";
    import IconPortfolio from "../../icons/IconPortfolio.svelte";
    import IconSocialMedia from "../../icons/IconSocialMedia.svelte";
    import IconTikTok from "../../icons/IconTikTok.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import SocialLink from "./SocialLink.svelte";
    export let menu: Menu[] = [];
</script>

<footer class="footer">
    <div class="footer__inner">
        <div class="footer__item">
            <a href="#home" class="footer__logo">
                <IconLogoSolid />
                <span>Sistemas Cúcuta</span>
            </a>

            <h2 class="footer__title">
                <IconContact />
                <span>Información de contacto</span>
            </h2>

            <ul class="footer__menu">
                <li class="footer__list footer__list--item">
                    <IconWhatsApp />
                    <span>317 483 6272</span>
                </li>

                <li class="footer__list footer__list--item">
                    <IconEmail />
                    <span>marketing@sistemascucuta.com</span>
                </li>

                <li class="footer__list footer__list--item">
                    <IconAddress />
                    <span> Av 2e # 6-19 B. Popular Cucuta NDS</span>
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
                        href="https://sistemascucuta.my.canva.site/"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconPortfolio />
                        <span>Sistemas Cúcuta</span>
                    </a>
                </li>

                <li class="footer__list">
                    <a
                        href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9jZjY5YTczZTAyNzNiMzQ3L0VVZXpjd0ktcDJrZ2dNX1BpZ0FBQUFBQmxVLTlDMEpxdFlSQWNyTlNiRUtqWHc&cid=CF69A73E0273B347&id=CF69A73E0273B347%2135535&parId=CF69A73E0273B347%218871&o=OneUp"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconPortfolio />
                        <span>Portafolio</span>
                    </a>
                </li>

                <li class="footer__list">
                    <a
                        href="https://wa.me/c/573174836272"
                        target="_blank"
                        class="footer__menu-link"
                    >
                        <IconForm />
                        <span>Catálogos</span>
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
                <SocialLink
                    href="https://www.instagram.com/sistemascucuta/"
                    title="Instagram"
                >
                    <IconInstagram />
                </SocialLink>

                <SocialLink
                    title="Facebook"
                    href="https://web.facebook.com/profile.php?id=61572988453042"
                >
                    <IconFacebook />
                </SocialLink>

                <SocialLink
                    title="TikTok"
                    href="https://www.tiktok.com/@sistemascucuta"
                >
                    <IconTikTok />
                </SocialLink>

                <SocialLink
                    title="GitHub"
                    href="https://github.com/ataraxius25"
                >
                    <IconGitHub />
                </SocialLink>
            </ul>
        </div>
    </div>
    <div class="footer__author">
        Desarrollado por
        <a
            href="https://dlunire.pro/"
            target="_blank"
            aria-label="DLUnire Framework"
        >
            <IconCodigosdelFuturo />
            <span>David E Luna M</span>
        </a>
    </div>
</footer>
