<script lang="ts">
    import "./header.scss";
    import Menu from "./menu/Menu.svelte";
    import type { Menu as MenuItem } from "../../../lib/interface/menu";
    import type { Size } from "../../../lib/interface/size";
    import { install } from "../../../lib/store";
    import { onDestroy, tick } from "svelte";
    import IconLogoSc from "../../icons/IconLogoSC.svelte";

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
    let ticking: boolean = false;

    addEventListener("scroll", function () {
        if (!ticking) {
            this.requestAnimationFrame(() => {
                scroll();
                ticking = false;
            });

            ticking = true;
        }
    });

    function scroll(): void {
        if (!(headerElement instanceof HTMLElement)) {
            return;
        }

        sizes = headerElement.getBoundingClientRect();
        console.log({ top, ref: sizes.top });
    }
</script>

<header class="header" style="--top: {top}px">
    <nav class="header__social-media" bind:this={headerElement}>
        <div class="header__social-inner">sdfasd</div>
    </nav>

    <nav class="header__nav header__nav--white" class:header__nav--open={open}>
        <div
            class="header__logo"
            class:header__logo--open={open}
            class:logo={change}
        >
            <IconLogoSc />
        </div>

        <div class="header__menu header__menu--white">
            <Menu bind:open bind:menu />
        </div>
    </nav>
</header>

<style lang="scss">
    .logo {
        --icon-size: 40px;
    }

    :global(svg) {
        transition: 300ms ease;
    }
</style>
