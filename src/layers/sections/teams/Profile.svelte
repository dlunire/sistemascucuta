<script lang="ts">
    import IconImage from "../../icons/IconImage.svelte";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";

    export let title: string = "Alvaro Mantilla";
    export let image: string = "";
    export let phone: string = "";

    let show: boolean = true;

    function handle(): void {
        show = false;
    }
</script>

<div class="team__item">
    <header class="team__header">
        {#if show}
            <img
                src="./images/photos/profile/{image}"
                alt="Perfil del equipo"
                on:error={handle}
            />
        {:else}
            <IconImage />
        {/if}
    </header>

    <section class="team__content">
        <h2 class="team__title">{title}</h2>
        <div class="team__description">
            <slot>Agregue su profesión aquí</slot>
            <a
                href="https://wa.me/57{phone}"
                class="team__whatsapp"
                target="_blank"
            >
                <IconWhatsApp />
                <span>Chatear</span>
            </a>
        </div>
    </section>
</div>

<style lang="scss">
    @use "../../../assets/sass/vars" as *;

    .team__item {
        --icon-size: 120px;

        --icon-width: var(--icon-size);
        --icon-height: var(--icon-size);

        :global(svg) {
            display: flex;
            --margin: 0 auto;
            background-image: white;
            border-radius: 23px;
        }
    }

    img {
        --border-width: 5px;

        border-left: var(--border-width) solid $secondary-color;
        border-top: var(--border-width) solid tertiary-color;
        border-right: var(--border-width) solid $base-color;
        border-bottom: var(--border-width) solid $desaturate-base-color;

        border: 1px solid rgba($base-color, 0.3);
        background-color: white;
    }
</style>
