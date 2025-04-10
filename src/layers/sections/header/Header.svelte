<script lang="ts">
    import "./header.scss";
    import Logo from "../../icons/Logo.svelte";
    import Menu from "./menu/Menu.svelte";
    import type { Menu as MenuItem } from "../../../lib/interface/menu";
    import type { Size } from "../../../lib/interface/size";
    import { install } from "../../../lib/store";
    import { onDestroy, onMount } from "svelte";

    export let menu: MenuItem[] = [];

    let headerElement: HTMLElement | null = null;
    let open: boolean = false;

    let size: Size = {
        width: 0,
        height: 0,
    };

    const unsubscribe = install.subscribe((currentSize: Size) => {
        size = currentSize;
        console.log({ currentSize });
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

        const sizes = element.getBoundingClientRect();
        size.width = sizes.width;
        size.height = sizes.height;
    }

    onDestroy(() => {
        unsubscribe();
    });

    $: loadSize(headerElement);
    $: top = size.height * -1;
</script>

<header class="header" style="--top: {top}px" bind:this={headerElement}>
    <nav class="header__social-media">
        <div class="header__social-inner">sdfasd</div>
    </nav>

    <nav class="header__nav header__nav--red" class:header__nav--open={open}>
        <div class="header__logo" class:header__logo--open={open}>
            <Logo />
        </div>
        <div class="header__menu header__menu--red">
            <Menu bind:open bind:menu />
        </div>
    </nav>
</header>
