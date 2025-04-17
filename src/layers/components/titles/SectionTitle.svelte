<script lang="ts">
    export let title: string = "Sin título";
</script>

<div class="section__title-container">
    <h2 class="section__title section__title--why-us">
        <span>{title}</span>
    </h2>
    <p><slot /></p>
</div>
