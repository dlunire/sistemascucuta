<script lang="ts">
    import "./header.scss";
    import Logo from "../../icons/Logo.svelte";
    import Menu from "./menu/Menu.svelte";
    import type { Menu as MenuItem } from "../../../lib/interface/menu";
    import type { Size } from "../../../lib/interface/size";
    import { install } from "../../../lib/store";
    import { onDestroy } from "svelte";

    export let menu: MenuItem[] = [];

    let open: boolean = false;

    let size: Size = {
        width: 0,
        height: 0,
    };

    const unsubscribe = install.subscribe((currentSize: Size) => {
        size = currentSize;
        console.log({ currentSize });
    });

    onDestroy(() => {
        unsubscribe();
    });

    $: top = size.height;

    $: console.log({ top });
</script>

<header class="header" style="--top: {top}px">
    <div class="header__blackbar"></div>

    <nav class="header__nav header__nav--red" class:header__nav--open={open}>
        <div class="header__logo" class:header__logo--open={open}>
            <Logo />
        </div>
        <div class="header__menu header__menu--red">
            <Menu bind:open bind:menu />
        </div>
    </nav>
</header>
