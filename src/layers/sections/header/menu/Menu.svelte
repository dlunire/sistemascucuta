<script lang="ts">
    import "./menu.scss";
    import MenuWindows from "../../../components/modal/MenuWindows.svelte";
    import type { Menu } from "../../../../lib/interface/menu";

    export let vertical: boolean = false;
    export let open: boolean = false;

    export let menu: Menu[] = [];

    /**
     * Menu Button
     *
     * @param event Evento del Mouse
     */
    function handle(event: MouseEvent): void {
        const { target: button } = event;

        if (!(button instanceof HTMLButtonElement)) {
            return;
        }

        open = !open;
    }

    function handleLink(): void {
        open = false;
    }
</script>

{#if vertical}
    <ul class="menu menu--portrait">
        {#each menu as item}
            <li class="menu__item menu__item--vertical">
                {#if item.icon}
                    <svelte:component this={item.icon} />
                {/if}

                <span>{item.label}</span>
            </li>
        {/each}
    </ul>
{:else}
    <ul class="menu menu--landscape">
        {#each menu as item}
            <li class="menu__item menu__item--white">
                <a
                    href={item.link}
                    class="menu__link menu__link--white"
                    on:click={handleLink}
                >
                    {#if item.icon}
                        <svelte:component this={item.icon} />
                    {/if}
                    <span>{item.label}</span>
                </a>
            </li>
        {/each}
    </ul>
{/if}

<button
    class="button button--menu"
    class:button--open-menu={open}
    aria-label="menu"
    on:click={handle}
    class:open
>
    <span></span><span></span><span></span>
</button>

<MenuWindows bind:menu bind:open />

<style lang="scss">
    .open {
        border-radius: 2px;

        &:hover {
            background-color: rgba(white, 0.2);
        }

        &,
        &:active {
            background-color: transparent;
        }
        span {
            width: 20px;
            --y: 46.7%;
            &:first-of-type {
                transform: rotate(45deg);
                animation: 300ms ease open-menu-1 ease forwards;
            }

            &:nth-of-type(2) {
                opacity: 0;
            }

            &:last-of-type {
                transform: rotate(-45deg);
                animation: 300ms ease open-menu-2 ease forwards;
            }
        }
    }
</style>
