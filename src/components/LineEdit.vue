<style>
.translate-header {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 5px 20px;
    color: rgba(255, 255, 255, 1);
}
</style>
<template>
    <div class="translate-edit">
        <div class="w3-right-align translate-header">
            <a href="#" style="font-variant-caps:small-caps;" v-on:click.prevent="selectedLineIndex = -1">Close</a>
        </div>
        <div class="w3-row-padding w3-tiny">
            <div class="w3-quarter">
                <div class="">
                    <h6>Terminology</h6>
                    <span class="w3-tag w3-pale-yellow w3-hover-yellow" v-for="term in terms" title="{{term.description}}">
                        <strong>term.text</strong> {{term.transText}}</span>
                    <span class="w3-tag w3-pale-yellow w3-hover-yellow">+</span>
                </div>
                <div class="">
                    <h6>Comments</h6>
                    <p v-if="! line.isEditComment">{{line.comment ? line.comment : 'No comment.'}}
                        <a href="#" style="font-variant-caps: small-caps;">EDIT</a>
                    </p>
                    <div class="w3-right-align" v-else>
                        <textarea class="w3-input">{{line.comment ? line.comment : 'No comment.'}}</textarea>
                        <a href="#" style="font-variant-caps: small-caps;">SAVE</a>
                    </div>
                </div>
            </div>
            <div class="w3-threequarter">
                <div class="w3-row">
                    <div class="w3-twothird translate-original">
                        <label class="translate-speeker" v-if="line.speeker">{{line.speeker}}</label>
                        <p class="translate-text">{{line.text}}
                            <a href="#"> <i class="fa fa-volume-down"></i></a>
                        </p>
                    </div>
                </div>
                <div class="w3-row">
                    <div class="w3-twothird translate-translation">
                        <label class="translate-speeker" v-if="line.speeker">{{line.speeker}}</label>
                        <div style="width:100%;">
                            <textarea class="w3-input w3-border translate-text" v-model.trim="line.transText"></textarea>
                            <div class="w3-row" style="margin-top:3px;">
                                <div class="w3-quarter" style="">
                                    <button class="w3-transparent w3-user-toggle" style="color:rgb(11, 134, 150);" v-on:click="toggleHistory(line, $event)">
                                        <i class="fa fa-history"></i>
                                    </button>
                                    <button class="w3-transparent" style="color:rgb(11, 134, 150);" v-on:click="toggleClone(line, $event)">
                                        <i class="fa fa-clone"></i>
                                    </button>
                                    <button class="w3-transparent" style="color:rgb(11, 134, 150);" v-on:click="toggleTranslation(line, $event)">
                                        <i class="fa fa-language"></i>
                                    </button>
                                </div>
                                <div class="w3-half w3-center">
                                    <button class="w3-tag" v-on:click="line.transText+='「'">「</button>
                                    <button class="w3-tag" v-on:click="line.transText+='」'">」</button>
                                    <button class="w3-tag" v-on:click="line.transText+='『'">『</button>
                                    <button class="w3-tag" v-on:click="line.transText+='』'">』</button>
                                    <button class="w3-tag" v-on:click="line.transText+='――'">―</button>
                                    <button class="w3-tag" v-on:click="line.transText+='……'">…</button>
                                </div>
                                <div class="w3-quarter w3-right-align w3-text-gray">
                                    <small>line.modifidTime_text</small>
                                </div>
                            </div>
                            <div class="w3-row line-help-history">
                                <h6>时间线</h6>
                                <button class="w3-tag w3-btn-block " style="" v-for="line in timeLines">asfasdsfa</button>
                            </div>
                            <div class="w3-row line-help-translation">
                                <h6>翻译帮助</h6>
                            </div>
                        </div>
                    </div>
                    <div class="w3-third">
                        <button class="w3-btn" style="font-variant-caps: small-caps;">SUGGEST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>