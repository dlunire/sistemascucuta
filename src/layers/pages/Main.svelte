<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import type { Menu } from "../../lib/interface/menu";
    import Container from "../sections/container/Container.svelte";
    import Footer from "../sections/footer/Footer.svelte";
    import Header from "../sections/header/Header.svelte";
    import IconHome from "../icons/IconHome.svelte";
    import IconAbout from "../icons/IconAbout.svelte";
    import IconService from "../icons/IconService.svelte";
    import IconContact from "../icons/IconContact.svelte";
    import WhatsAppModal from "../components/modal/WhatsAppModal.svelte";

    let menu: Menu[] = [
        {
            label: "HOME",
            link: "#home",
            icon: IconHome as typeof SvelteComponent,
        },
        {
            label: "Nosotros",
            link: "#about",
            icon: IconAbout as typeof SvelteComponent,
        },
        {
            label: "Servicios",
            link: "#services",
            icon: IconService as typeof SvelteComponent,
        },
        {
            label: "Contacto",
            link: "#contact",
            icon: IconContact as typeof SvelteComponent,
        },
    ];
</script>

<main>
    <Header bind:menu />
    <Container />
    <Footer bind:menu />
    <WhatsAppModal />
</main>
