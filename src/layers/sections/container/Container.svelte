<script lang="ts">
    import type { Menu } from "../../../lib/interface/menu";
    import Cover from "../banner/Cover.svelte";
    import Clients from "../clients/Clients.svelte";
    import OurServices from "../our-services/OurServices.svelte";
    import WhyUs from "../WhyUS/WhyUS.svelte";
    import About from "./About.svelte";
    import AboutUs from "./AboutUS.svelte";
    import ConctactUs from "./ConctactUS.svelte";
    import Services from "./Services.svelte";
</script>

<section class="container">
    <Cover />
    <OurServices />
    <WhyUs />
    <Clients />
    <!-- <About />
    <AboutUs />
    <Services /> -->
    <ConctactUs />
</section>
