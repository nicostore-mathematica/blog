<template>
    <div class="aside-nav-wrapper">
        <a
            class="vp-link"
            href="https://bgm.tv/"
            target="_blank"
            rel="noreferrer"
        >
            <span>这里是班固米</span>
            <span class="arrow">→</span>
        </a>
    </div>
</template>

<style scoped>
	.aside-nav-wrapper {
        display: flex;
        flex-direction: column;
        gap:6px;
        margin: 16px 16px 0;
        padding-top: 8px;
        border-top: lpx solid var(--vp-c-divider);
    }

	.vp-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: var(--c-text);
        font-size: 12px;
        transition: color 0.2s ease;
    }

	.vp-link:hover {
	    color: var(--vp-c-brand-1);
	}

	.arrow{
        margin-left: 12px;
        flex-shrink: 0;
	}
</style>
