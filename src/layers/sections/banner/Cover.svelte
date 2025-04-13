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
    import { getImages } from "../../../lib/utils/Images";
    // import IconPortfolio from "../../icons/IconPortfolio.svelte";

    let images: Image[] = getImages();
</script>

<section class="banner" id="home">
    <Splide
        aria-label="Sliders"
        options={{
            autoplay: true,
            interval: 3000,
            rewind: true,
            loop: true,
            type: "loop",
            speed: 600,
            drag: true,
            flickPower: 600,
            flickMaxPages: 1,
        }}
    >
        {#each images as { src, title, alt }, index}
            <SplideSlide>
                <img {src} {alt} />

                <div class="banner__content">
                    <div class="banner__content__inner">
                        <h2 class="banner__title">
                            <span>{title}</span>
                        </h2>

                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</section>

<style lang="scss">
    .banner {
        min-height: 400px;
        display: flex;
    }
</style>
