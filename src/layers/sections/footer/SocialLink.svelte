<script lang="ts">
    export let href: string = "";
    export let title: string = "Sin título";
</script>

<li class="footer__list footer__list--social-media">
    <a
        {href}
        class="footer__menu-link footer__menu-link--socialmedia"
        aria-label={title}
        rel="nofollow"
        target="_blank"
        data-social-media="instagram"
    >
        <slot>Su ícono</slot>
        <span>{title}</span>
    </a>
</li>
