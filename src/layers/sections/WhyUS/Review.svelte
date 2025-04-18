<script lang="ts">
    import IconImage from "../../icons/IconImage.svelte";

    export let title: string = "Sin título";
    export let href: string = "#";

    let show: boolean = true;
</script>

<a {href} class="google" target="_blank" rel="nofollow">
    <div class="google__header">
        {#if show}
            <img src="./images/google/review-01.png" alt={title} />
        {:else}
            <div class="center">
                <IconImage />
            </div>
        {/if}
    </div>

    <div class="google__description">
        <slot>
            <div class="center">Coloque aquí su descripción</div>
        </slot>
    </div>
</a>

<style>
    .center {
        text-align: center;
    }
</style>
