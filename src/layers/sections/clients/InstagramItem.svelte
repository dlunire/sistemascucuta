<script lang="ts">
    import IconImage from "../../icons/IconImage.svelte";
    import IconInstagram from "../../icons/IconInstagram.svelte";

    export let title: string = "Sin título";
    export let image: string = "image.png";

    let show: boolean = true;

    function handle(): void {
        show = false;
    }
</script>

<article class="instagram__item">
    <header class="instagram__header">
        {#if show}
            <img
                src="./images/clients/{image}"
                alt={title}
                aria-label={title}
                title="Ver en Instagram"
                on:error={handle}
            />
        {:else}
            <IconImage />
        {/if}
    </header>

    <div class="instagram__content">
        <slot>Ver en Instagram</slot>
    </div>

    <div class="instagram__svg-container">
        <IconInstagram />
    </div>
</article>
