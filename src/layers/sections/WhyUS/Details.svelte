<script lang="ts">
    import ArrowLeft from "../../icons/ArrowLeft.svelte";

    export let title: string;
    export let open: boolean = false;
    export let transition: number = 300;

    let contentHeight: number | null = null;

    let summary: HTMLElement | null = null;
    let section: HTMLElement | null = null;
    let element: HTMLElement | null = null;

    let maxHeight: number = 0;

    let style: string = "";

    function loadSize(
        element: HTMLElement | null,
        open: boolean = false,
    ): void {
        if (!(element instanceof HTMLElement)) return;

        if (!contentHeight) {
            const rect: DOMRect = element.getBoundingClientRect();
            contentHeight = rect.height;
            style = `--height: ${contentHeight}px; --max-height${maxHeight}px; transition: ${transition}ms ease`;

            maxHeight = contentHeight;
        }

        loadMaxHeight();
    }

    interface Size {
        width: number;
        height: number;
    }

    /**
     * Devuelve el tamañ del ememento
     *
     * @param element
     */
    function getSize(element: HTMLElement | null): Size {
        if (!(element instanceof HTMLElement)) {
            return {
                width: 0,
                height: 0,
            };
        }

        const rect: DOMRect = element.getBoundingClientRect();

        return {
            width: rect.width,
            height: rect.height,
        };
    }

    /**
     * Devuelve el tamaño del elemento Summary
     *
     * @param element Element a ser analizado
     */
    function getSummarySize(): Size {
        return getSize(summary);
    }

    /**
     * Devuelve el tamaño de la sección
     *
     * @param element
     */
    function getSectionSize(): Size {
        return getSize(section);
    }

    /**
     * Carga el tamaño máximo de despliegue del elemento
     */
    function loadMaxHeight(): void {
        const summaryHeight: number = getSummarySize().height;
        const sectionHeight: number = getSectionSize().height;
        maxHeight = contentHeight ?? 0 + summaryHeight + sectionHeight;
    }

    $: loadSize(element, open);

    let currentOpen: boolean = false;

    function handle(event: MouseEvent): void {
        const { target: element } = event;

        if (!(element instanceof HTMLElement)) {
            return;
        }

        const details: HTMLDetailsElement | null = element.closest("details");

        if (!(details instanceof HTMLDetailsElement)) {
            return;
        }

        currentOpen = !currentOpen;

        if (open) {
            open = !open;

            setTimeout(() => {
                open = !open;
            }, transition);
        }
    }
</script>

<details
    class="why"
    bind:open
    bind:this={element}
    {style}
    class:height={Boolean(contentHeight)}
    class:open={currentOpen}
>
    <summary
        class="why__title"
        on:click={handle}
        class:summary-open={currentOpen}
    >
        <div class="icon-left">
            <slot name="icon" />
            <span>{title}</span>
        </div>

        <div class="icon-right">
            <ArrowLeft hidden={!currentOpen} />
        </div>
    </summary>
    <section class="why__content" bind:this={element}>
        <slot />
    </section>
</details>

<style lang="scss">
    @use "sass:color";
    @use "../../../assets/sass/vars" as *;

    details {
        interpolate-size: allow-keywords;
        overflow: clip;
        transition: 300ms ease;

        &::marker {
            display: none;
        }
    }

    .height {
        height: var(--height);
    }

    .open {
        height: var(--max-height);
    }

    summary {
        user-select: none;
        transition: 300ms ease;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        --icon-size: 19px;
        --icon-width: var(--icon-size);
        --icon-height: var(--icon-size);

        --icon-color: black;

        .icon-right {
            :global(svg) {
                display: block;
                transform: rotate(-90deg);
            }
        }

        .icon-left {
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 0;
        }
    }

    .summary-open {
        --icon-color: white;

        background-color: $base-color;
        color: white;
        border-radius: 5px 5px 0 0;

        &:hover {
            background-color: color.adjust($color: $base-color, $lightness: 5%);
        }

        &:active {
            transition: none;
        }

        &,
        &:active {
            background-color: $base-color;
        }

        .icon-right {
            :global(svg) {
                transform: rotate(90deg);
            }
        }
    }
</style>
