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
    import IconDiagram from "../icons/IconDiagram.svelte";
    import IconCheck from "../icons/IconCheck.svelte";
    import IconTeam from "../icons/IconTeam.svelte";

    let menu: Menu[] = [
        {
            label: "HOME",
            link: "#home",
            icon: IconHome as typeof SvelteComponent,
        },
        {
            label: "Servicios",
            link: "#services",
            icon: IconService as typeof SvelteComponent,
        },
        {
            label: "¿Por qué elegirnos?",
            link: "#about",
            icon: IconCheck as typeof SvelteComponent,
        },
        {
            label: "Proyectos",
            link: "#clients",
            icon: IconDiagram as typeof SvelteComponent,
        },
        {
            label: "Nuestro equipo",
            link: "#contact",
            icon: IconTeam as typeof SvelteComponent,
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
