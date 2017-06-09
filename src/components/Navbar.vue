<style lang="">
    
</style>
<template>
    <ul class="w3-navbar w3-padding-4 w3-black">
        <li><a href="#"><i class="fa fa-lg fa-home"></i></a></li>
        <li class="w3-dropdown-hover">
            <a href="#">{{projectName}} <i class="fa fa-caret-down"></i></a>
            <div class="w3-dropdown-content w3-black w3-card-4">
            <input class="w3-input w3-padding" type="text" placeholder="Search..">
            <a :href="'/' + projectName">全部文件</a>
            <hr>
            <a v-for="file of recentFiles" :href="'/'+projectName+'/'+file.name" >{{file.name}}</a>
            </div>
        </li>
        <li class="w3-right w3-dropdown-hover">
            <a class="" href="#">{{username}}<span class="w3-text-purple" style="width:2em;display:inline-block;text-align:center;">{{notifyCount}}</span> <i class="fa fa-lg fa-bars"></i></a>
            <div class="w3-dropdown-content w3-black w3-card-2 w3-text-right-align" style="right:0px;width:100px;">
            <a href="/user"><i class="fa fa-fw fa-user"></i> 个人</a>
            <a href="/setting"><i class="fa fa-fw fa-cog"></i> 设置</a>
            <a href="/statics"><i class="fa fa-fw fa-bar-chart"></i> 统计</a>
            <a href="/about"><i class="fa fa-fw fa-info-circle"></i> 关于</a>
            <hr>
            <a href="/logout"><i class="fa fa-fw fa-sign-out"></i> 注销</a>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        projectName: String,
        recentFiles: Array,
        username: String,
        notifyCount: Number,
    },
    data() {
        return {

        }
    }
}
</script>