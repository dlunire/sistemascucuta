<script lang="ts">
    export let hidden: boolean = false;
</script>

<div class="loading" class:hidden>
    <svg
        fill="hsl(228, 97%, 42%)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><circle cx="4" cy="12" r="0"
            ><animate
                begin="0;spinner_z0Or.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="0;3"
                fill="freeze"
            /><animate
                begin="spinner_OLMs.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="4;12"
                fill="freeze"
            /><animate
                begin="spinner_UHR2.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="12;20"
                fill="freeze"
            /><animate
                id="spinner_lo66"
                begin="spinner_Aguh.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="3;0"
                fill="freeze"
            /><animate
                id="spinner_z0Or"
                begin="spinner_lo66.end"
                attributeName="cx"
                dur="0.001s"
                values="20;4"
                fill="freeze"
            /></circle
        ><circle cx="4" cy="12" r="3"
            ><animate
                begin="0;spinner_z0Or.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="4;12"
                fill="freeze"
            /><animate
                begin="spinner_OLMs.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="12;20"
                fill="freeze"
            /><animate
                id="spinner_JsnR"
                begin="spinner_UHR2.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="3;0"
                fill="freeze"
            /><animate
                id="spinner_Aguh"
                begin="spinner_JsnR.end"
                attributeName="cx"
                dur="0.001s"
                values="20;4"
                fill="freeze"
            /><animate
                begin="spinner_Aguh.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="0;3"
                fill="freeze"
            /></circle
        ><circle cx="12" cy="12" r="3"
            ><animate
                begin="0;spinner_z0Or.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="12;20"
                fill="freeze"
            /><animate
                id="spinner_hSjk"
                begin="spinner_OLMs.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="3;0"
                fill="freeze"
            /><animate
                id="spinner_UHR2"
                begin="spinner_hSjk.end"
                attributeName="cx"
                dur="0.001s"
                values="20;4"
                fill="freeze"
            /><animate
                begin="spinner_UHR2.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="0;3"
                fill="freeze"
            /><animate
                begin="spinner_Aguh.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="4;12"
                fill="freeze"
            /></circle
        ><circle cx="20" cy="12" r="3"
            ><animate
                id="spinner_4v5M"
                begin="0;spinner_z0Or.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="3;0"
                fill="freeze"
            /><animate
                id="spinner_OLMs"
                begin="spinner_4v5M.end"
                attributeName="cx"
                dur="0.001s"
                values="20;4"
                fill="freeze"
            /><animate
                begin="spinner_OLMs.end"
                attributeName="r"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="0;3"
                fill="freeze"
            /><animate
                begin="spinner_UHR2.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="4;12"
                fill="freeze"
            /><animate
                begin="spinner_Aguh.end"
                attributeName="cx"
                calcMode="spline"
                dur="0.5s"
                keySplines=".36,.6,.31,1"
                values="12;20"
                fill="freeze"
            /></circle
        ></svg
    >
</div>

<style>
    .loading {
        --loading-color: #e30613ff;
        --loading-size: 100px;

        position: fixed;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(219, 219, 219);
        transition: 300ms ease;

        z-index: 100000;
    }

    .hidden {
        opacity: 0;
        pointer-events: none;
        user-select: none;
    }

    circle {
        fill: var(--loading-color);
    }

    svg {
        width: var(--loading-size);
        height: var(--loading-size);
    }
</style>
