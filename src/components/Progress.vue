<style lang="">

</style>
<template>
    <div class="w3-progress-container w3-tooltip w3-pink" style="height: 9px;">
        <div class="w3-progressbar w3-green" v-bind:style="{width:transPercent+'%'}"></div>
        <div class="w3-progressbar w3-lime" v-bind:style="{width:locksPercent+'%'}"></div>
        <div class="w3-text" style="position:absolute;top:9px;left:50%;transform:translate(-50%,0%);">
            <div class="tip-arrow"></div>
            <div class="w3-padding w3-round w3-black" style="margin-top: 5px;">
            <i class="fa fa-square fa-fw w3-text-green"></i> {{locksPercent}}% 已锁定<br>
            <i class="fa fa-square fa-fw w3-text-lime"></i> {{transPercent}}% 已翻译<br>
            <i class="fa fa-square fa-fw w3-text-pink"></i> {{untransPercent}}% 未翻译
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['locksPercent', 'transPercent'],
    computed: {
        untransPercent() {
            return 1 - this.transPercent;
        }
    }
}
</script>