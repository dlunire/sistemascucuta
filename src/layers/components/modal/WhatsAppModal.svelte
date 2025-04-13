<script lang="ts">
    import "./scss/whatsapp.scss";
    import IconWhatsApp from "../../icons/IconWhatsApp.svelte";

    let element: HTMLElement | null = null;

    function load(element: HTMLElement | null): void {
        if (!(element instanceof HTMLElement)) {
            return;
        }

        document.body.appendChild(element);
    }

    $: load(element);
</script>

<section class="whatsapp" bind:this={element}>
    <a
        href="https://wa.me/573174836272"
        title="Ir a WhatsApp"
        aria-label="Sistemas Cúcuta"
        class="whatsapp__link"
        target="_blank"
        rel="nofollow"
    >
        <IconWhatsApp />
        <span>WhatsApp</span>
    </a>
</section>
