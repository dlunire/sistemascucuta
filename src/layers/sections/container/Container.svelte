<script lang="ts">
    import type { Image } from "../../../lib/interface/Image";
    // import type { Menu } from "../../../lib/interface/menu";
    import Cover from "../banner/Cover.svelte";
    import About from "./About.svelte";
    import AboutUs from "./AboutUS.svelte";
    import ConctactUs from "./ConctactUS.svelte";
    import Services from "./Services.svelte";

    export let interval: number = 3000;
</script>

<section class="container">
    <Cover />
    <About />
    <AboutUs />
    <Services />
    <ConctactUs />
</section>
