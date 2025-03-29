<script lang="ts">
    import { onMount } from "svelte";
    import IconInstall01 from "../icons/IconInstall01.svelte";
    import IconClose from "../icons/IconClose.svelte";
    import { install } from "../../lib/store";

    let deferredPrompt: any = null;
    let showButton: boolean = false;
    let stringdata: string | null = null;

    let container: HTMLElement | null = null;

    onMount(() => {
        stringdata = localStorage.getItem("install");

        if (stringdata) {
            showButton = false;
            return;
        }

        window.addEventListener("beforeinstallprompt", (event) => {
            event.preventDefault(); // Evita que el navegador muestre el mensaje automáticamente
            deferredPrompt = event;
            showButton = true;
        });
    });

    function loadSize(container: HTMLElement | null): void {
        if (!(container instanceof HTMLElement)) {
            return;
        }

        const client = container.getBoundingClientRect();

        install.set({
            width: client.width,
            height: client.height,
        });
    }

    $: loadSize(container);

    async function installApp(): Promise<void> {
        if (!deferredPrompt) return;
        deferredPrompt.prompt(); // Muestra el prompt de instalación
        const { outcome } = await deferredPrompt.userChoice;

        const message: string =
            outcome == "accepted"
                ? "El usuario aceptó la instalación"
                : "El usuario rechazó la instalación";

        console.log(message);

        deferredPrompt = null;
        showButton = false;
        install.set({ height: 0, width: 0 });
    }

    /**
     * Cierra el cuadro de diálogo de sugerencia de instalación
     *
     * @returns
     */
    function close(event: MouseEvent): void {
        localStorage.setItem("install", `{}`);
        showButton = false;
        install.set({ height: 0, width: 0 });
    }
</script>

{#if showButton}
    <div class="button-container" bind:this={container}>
        <div class="button-container__inner">
            <button on:click={installApp} class="install-button">
                <IconInstall01 />
                <span>Instalar aplicación</span>
                <!-- 📲 Instalar aplicación -->
            </button>

            <button class="button" on:click={close} aria-label="No instalar">
                <IconClose />
            </button>
        </div>
    </div>
{/if}

<style lang="scss">
    .button-container {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1000000;

        --icon-color: white;

        background-color: #021d1e;
        padding: 7px 10px;
        border-bottom: 2px solid rgb(202, 0, 0);

        &__inner {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;

            display: flex;
            justify-content: space-between;
        }
    }

    .install-button {
        background-color: #108001;
        color: white;
        border: none;
        border-radius: 20px;
        height: 30px;
        cursor: pointer;
        font-size: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 10000000;
        max-width: 200px;
        transition: 300ms ease;
        padding: 0 15px;

        --icon-size: 17px;
        --icon-color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        font: {
            size: 0.9rem;
        }

        @media screen and (max-width: 720px) {
            right: unset;
        }
    }

    .install-button:hover {
        background-color: #005f90;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 300ms ease;
        --icon-size: 17px;

        &:hover {
            background-color: rgba(red, 0.6);
        }

        &:active {
            transition: none;
            background-color: trasparent;
        }
    }
</style>
