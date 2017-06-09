<template>
    <div class="w3-row translate-view">
        <div class="w3-half translate-original">
            <label class="translate-speeker" v-if="speeker">{{speeker}}</label>
            <div class="translate-text">{{text}}</div>
        </div>
        <div class="w3-half translate-translation">
            <label class="translate-speeker" v-if="speeker">{{speeker}}</label>
            <div class="translate-text">{{transText}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['index', 'lineId', 'text', 'transText', 'speeker'],

}
</script>