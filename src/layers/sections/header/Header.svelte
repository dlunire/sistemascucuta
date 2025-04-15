<script lang="ts">
    import "./header.scss";
    import Menu from "./menu/Menu.svelte";
    import type { Menu as MenuItem } from "../../../lib/interface/menu";
    import type { Size } from "../../../lib/interface/size";
    import { install } from "../../../lib/store";
    import { onDestroy, tick } from "svelte";
    import IconLogoSc from "../../icons/IconLogoSC.svelte";
    import IconEmail from "../../icons/IconEmail.svelte";
    import IconFacebook from "../../icons/IconFacebook.svelte";
    import IconInstagram from "../../icons/IconInstagram.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";
    import IconLogoScr from "../../icons/IconLogoSCR.svelte";

    export let menu: MenuItem[] = [];

    let headerElement: HTMLElement | null = null;
    let open: boolean = false;

    let size: Size = {
        width: 0,
        height: 0,
    };

    let sizes: DOMRect | undefined = undefined;

    const unsubscribe = install.subscribe((currentSize: Size) => {
        size = currentSize;
    });

    /**
     * Carga el tamaño del elemento seleccionado
     *
     * @param element Element a ser analizado
     * @returns
     */
    function loadSize(element: HTMLElement | null): void {
        if (!(element instanceof HTMLElement)) {
            return;
        }

        const sizes: DOMRect = element.getBoundingClientRect();
        size.width = sizes.width;
        size.height = sizes.height;
    }

    onDestroy(() => {
        unsubscribe();
    });

    $: loadSize(headerElement);
    $: top = size.height * -1;

    let change: boolean = false;

    addEventListener("scroll", function () {
        scroll();
    });

    function scroll() {
        if (!(headerElement instanceof HTMLElement)) return;

        const ref = headerElement.getBoundingClientRect().top;
        const currentTop: number = ref * -1;

        if (currentTop < scrollY) {
            change = true;
        }

        if (change && currentTop <= 0) {
            change = false;
        }
    }
</script>

<header class="header" class:line={change} style="--top: {top}px;">
    <nav class="header__social-media" bind:this={headerElement}>
        <div class="header__social-inner">
            <div class="header__social-item header__social-item--left">
                <a
                    href="mailto:marketing@sistemascucuta.com"
                    class="header__social-link header__social-link--email"
                    aria-label="marketing@sistemascucuta.com"
                    title="marketing@sistemascucuta.com"
                >
                    <IconEmail />
                    <span>marketing@sistemascucuta.com</span>
                </a>
            </div>
            <div class="header__social-item header__social-item--right">
                <a
                    href="https://web.facebook.com/SistemasCucuta2"
                    aria-label="Facebook"
                    title="Perfil de Sistemas Cúcuta en Facebook"
                    rel="nofollow"
                    target="_blank"
                    class="header__social-link header__social-link--facebook"
                >
                    <IconFacebook />
                </a>

                <a
                    href="https://www.instagram.com/sistemascucuta/"
                    aria-label="Facebook"
                    title="Perfil de Sistemas Cúcuta en Instagram"
                    rel="nofollow"
                    target="_blank"
                    class="header__social-link header__social-link--instagram"
                >
                    <IconInstagram />
                </a>

                <a
                    href="https://wa.me/573174836272"
                    aria-label="Perfil de WhatsApp"
                    title="Perfil de Sistemas Cúcuta en Whatsapp"
                    rel="nofollow"
                    target="_blank"
                    class="header__social-link header__social-link--whatsapp"
                >
                    <IconWhatsApp />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </nav>

    <nav
        class="header__nav header__nav--white"
        class:padding={change}
        class:header__nav--open={open}
    >
        <a
            href="#home"
            class="header__logo"
            class:header__logo--open={open}
            class:logo={change}
        >
            <IconLogoScr />
            <h1 class="header__title">
                <span class="color color--base">Sistema</span>
                <span class="color color--secondary">&nbsp;Cúcuta</span>
            </h1>
        </a>

        <div class="header__menu header__menu--white">
            <Menu bind:open bind:menu />
        </div>
    </nav>
</header>

<style lang="scss">
    .logo {
        --icon-size: 50px;
    }

    :global(svg) {
        transition: 300ms ease;
    }

    .padding {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .line {
        border-bottom: 1px solid rgba(black, 0.1);
    }

    // .header {
    //     // position: relative;

    //     &::before {
    //         content: "";
    //         display: block;
    //         position: absolute;
    //         margin: auto;
    //         left: 0;
    //         right: auto;
    //         top: auto;
    //         bottom: 0;
    //         animation: var(--progress);
    //         height: 4px;
    //         background-color: rgb(255, 208, 0);
    //         z-index: 1;
    //     }
    // }
</style>
