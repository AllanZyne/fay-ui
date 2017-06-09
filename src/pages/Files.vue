<style>

</style>

<template>
    <div class="file-page">
        <main-navbar :projectName="projectName" :recentFiles="recentFiles" :username="username" :notifyCount="notifyCount" />
        <main-progress :locksPercent="locksPercent" :transPercent="transPercent" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Progress from '@/components/Progress'
import { getUserInfo, getProjectInfo, getFilesList } from '@/model'

import NProgress from 'nprogress'

export default {
    components: {
        MainNavbar: Navbar,
        MainProgress: Progress,
    },
    created() {
        this.fetchData()
    },
    data() {
        return {
            username: 'Username',
            notifyCount: 8,
            locksPercent: 0.4,
            transPercent: 0.5,
            recentFiles: [],
            files: [],
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            NProgress.start()

            Promise.all(
                getUserInfo(), 
                getProjectInfo(this.projectName),
                getFilesList(this.projectName),
            ).then(([user, project, files]) => {
                this.username = user.name;
                this.notifyCount = user.notifyCount;

                this.locksPercent = project.locksPercent;
                this.transPercent = project.transPercent;

                this.files = files;

                NProgress.done()
            }).catch(errs => {
                // console.log('errs', errs);
            });
        },
        fetchError(errs) {
            console.log('errs', errs);
        }
    },
    computed: {
        projectName() {
            return this.$route.params.project;
        }
    },
}
</script>
