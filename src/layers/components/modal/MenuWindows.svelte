<script lang="ts">
    import type { Menu } from "../../../lib/interface/menu";
    import IconFinalcial from "../../icons/IconFinancial.svelte";
    import IconForm from "../../icons/IconForm.svelte";
    import IconPortfolio from "../../icons/IconPortfolio.svelte";
    import "./scss/menu.scss";

    export let open: boolean = false;
    export let menu: Menu[] = [];
    export let top: number = 0;

    let modal: HTMLElement | null = null;

    /**
     * Agrega la ventana modal en el cuerpo del documento
     *
     * @param element
     */
    function loadModal(element: HTMLElement | null): void {
        document.body.removeAttribute("style");

        if (!(element instanceof HTMLElement)) {
            return;
        }

        document.body.appendChild(element);

        if (open) {
            document.body.setAttribute("style", "overflow: hidden");
            return;
        }
    }

    /**
     * Cierra el menú de navegación
     */
    function handle(): void {
        open = false;
    }

    $: loadModal(modal);
</script>

{#if open}
    <div class="modal-container" bind:this={modal} style="--top: {top}px">
        <section class="modal">
            <section class="modal__container">
                <h2 class="modal__title">
                    <span>Menú principal</span>
                </h2>
                <ul class="menu menu--portrait">
                    {#each menu as item}
                        <li class="menu__item menu__item--portrait">
                            <a
                                class="menu__link menu__link--portrait"
                                href={item.link}
                                aria-label={item.label}
                                on:click={handle}
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

                <h2 class="modal__title">
                    <span>Enlaces externos</span>
                </h2>

                <ul class="menu menu--portrait">
                    <li class="menu__item menu__item--portrait">
                        <a
                            href="https://drive.google.com/file/d/18ovkKrJatJdvUdNifLplUBV2SsTjjcCV/view"
                            class="menu__link menu__link--portrait"
                            target="_blank"
                            rel="nofollow"
                        >
                            <IconPortfolio />
                            <span>Portafolio</span>
                        </a>
                    </li>

                    <li class="menu__item menu__item--portrait">
                        <a
                            href="https://drive.google.com/file/d/1jLmSbZ3H8TutQbmLx67Wbue0r4Q5-H_H/view"
                            class="menu__link menu__link--portrait"
                            target="_blank"
                            rel="nofollow"
                        >
                            <IconFinalcial />
                            <span>Formato de propuesta económica</span>
                        </a>
                    </li>

                    <li class="menu__item menu__item--portrait">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd-E2T6CjR2leReUoF16Ku_klbpUykN2G0LJpG-iCnPkbP06w/viewform"
                            class="menu__link menu__link--portrait"
                            target="_blank"
                            rel="nofollow"
                        >
                            <IconForm />
                            <span>Formulario de contacto</span>
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    </div>
{/if}
