<style lang="">

</style>

<template>
    <div class="line-page">
        <main-navbar :projectName="projectName" :recentFiles="recentFiles" :username="username" :notifyCount="notifyCount" />
        <main-progress :locksPercent="locksPercent" :transPercent="transPercent" />
        <div class="w3-main">
            <ul class="w3-ul w3-hoverable">
                <li v-for="(line, index) of lines" :id="'L' + line.id">
                    <line-view :index="index" :lineId="line.id" :text="line.text" :transText="line.transText" />
                    <!--<line-view v-if="selectedLineIndex == index" />-->
                    <!--<line-edit v-else />-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Progress from '@/components/Progress'
import LineView from '@/components/LineView'
// import LineEdit from '@/components/LineEdit'


// 当页面滚动时，自动关闭当前编辑行（

export default {
    components: {
        MainNavbar: Navbar,
        MainProgress: Progress,
        LineView,
        // LineEdit,
    },
    data() {
        return {
            recentFiles: [{ name: 'file1' }, { name: 'file2' }],
            username: 'UserName',
            notifyCount: 10,
            locksPercent: 0.1,
            transPercent: 0.8,
            lines: [{
                id: 1,
                text: '121212',
                transText: '1212',
                speeker: 'ddd',
            }, {
                id: 2,
                text: '121212',
                transText: '1212',
                speeker: 'ddd',                
            }]
        }
    },
    computed: {
        projectName() {
            return this.$route.params.project;
        },
        fileName() {
            return this.$route.params.file;
        }
    }
}
</script>

