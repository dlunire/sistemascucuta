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
        href="https://wa.me/573004398344"
        title="Ir a WhatsApp"
        aria-label="Ir a WhatsApp"
        class="whatsapp__link"
        target="_blank"
        rel="nofollow"
    >
        <IconWhatsApp />
        <span>WhatsApp</span>
    </a>
</section>
