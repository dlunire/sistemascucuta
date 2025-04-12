<script lang="ts">
    // Default theme
    import "@splidejs/svelte-splide/css";

    // or other themes
    // import "@splidejs/svelte-splide/css/skyblue";
    // import "@splidejs/svelte-splide/css/sea-green";

    // or only core styles
    import "./splide/splide.scss";
    import "@splidejs/svelte-splide/css/core";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import type { Image } from "../../../lib/interface/Image";
    // import IconPortfolio from "../../icons/IconPortfolio.svelte";

    export let images: Image[] = [];
</script>

<section class="banner" id="home">
    <Splide aria-label="Sliders">
        {#each images as { src, title, alt }, index}
            <SplideSlide>
                <img {src} {alt} />
            </SplideSlide>
        {/each}
        <SplideSlide>
            <img src="image2.jpg" alt="Segunda imagen" />
        </SplideSlide>

        <SplideSlide>
            <img src="image2.jpg" alt="Segunda imagen" />
        </SplideSlide>
        <SplideSlide>
            <img src="image2.jpg" alt="Segunda imagen" />
        </SplideSlide>
    </Splide>
</section>

<style lang="scss">
    .banner {
        min-height: 400px;
        display: flex;
    }
</style>
