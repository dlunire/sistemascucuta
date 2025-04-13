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
    import type { MoveEventDetail } from "@splidejs/svelte-splide/types";
    // import IconPortfolio from "../../icons/IconPortfolio.svelte";

    let images: Image[] = getImages();
    let currentIndex: number = 0;

    function handleMove(event: CustomEvent<MoveEventDetail> | undefined): void {
        if (!event) return;

        const { index } = event.detail;
        currentIndex = index;
    }
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
            speed: 1200,
            drag: true,
            flickPower: 600,
            flickMaxPages: 1,
            keyboard: "global",
            paginationKeyboard: true,
        }}
        on:move={handleMove}
    >
        {#each images as { src, title, alt }, index}
            <SplideSlide>
                <img {src} {alt} />

                <div class="banner__content">
                    <div
                        class="banner__content__inner"
                        class:active={index == currentIndex}
                        class:inactive={index != currentIndex}
                    >
                        <h2 class="banner__title">
                            <span>{title}</span>
                        </h2>

                        <p>{title}.</p>
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

    .active {
        background-color: purple;
        animation-name: fade-in;
        animation-duration: 600ms;
        animation-timing-function: ease;
        animation-delay: 200ms;
        animation-fill-mode: forwards;
        opacity: 0;
        transform: scale(0);
    }

    .inactive {
        animation: 300ms ease fade-out forwards;
    }
</style>
