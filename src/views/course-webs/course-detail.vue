<template>
    <div class="courseContent">
        <div>
            <BriefCourseCard class="courseCard" :course="course"></BriefCourseCard>
            <CourseMiniMenu class="courseMiniMenu" :course="course"></CourseMiniMenu>
        </div>
        <div class="courseDetail">
            <div v-if="type == 'file'">
                <div>
                    <h1 style="margin-top: 0.1%; margin-left: 0.5%;">课程文件</h1>
                </div>
                <iframe :src="previewUrl" class="pdf-frame"></iframe>
            </div>
            <div v-if="type == 'text'">
                <h1 style="margin-top: 0.1%; margin-left: 0.5%;">课前预习</h1>
                <TinymceEditor
                    ref="editorRef"
                    id="editor"
                    v-model:value="content1"
                    class="TinyMCE"
                    :inline="true"
                ></TinymceEditor>
            </div>
            <div v-if="type == 'homework'">
                <h1 style="margin-top: 0.1%; margin-left: 0.5%;">课后练习</h1>
                <TinymceEditor
                    ref="editorRef"
                    id="editor"
                    v-model:value="content2"
                    class="TinyMCE"
                    :inline="true"
                ></TinymceEditor>
                <TinymceEditor
                    ref="editorRef"
                    id="editor"
                    v-model:value="content"
                    class="TinyMCE-input"
                    :inline="false"
                ></TinymceEditor>
                <div style="margin-top:1%;margin-left: 65%;" align="left">
                    <el-button type="info">清除</el-button>
                    <el-button type="primary">提交</el-button>
                </div>
            </div>
            <div v-if="type == 'video'">
                <h1 style="margin-top: 0.1%; margin-left: 0.5%;">课程视频</h1>
                <Video></Video>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import BriefCourseCard from '@/components/BriefCourseCard.vue';
import CourseMiniMenu from '@/components/CourseMiniMenu.vue';
import CourseBulletin from '@/components/CourseBulletin.vue';
import { computed, defineAsyncComponent, reactive, ref } from 'vue';
import { defineComponent } from 'vue';
import Video from '@/views/course-webs/course-video-preview.vue'
import TinymceEditor from '@/components/TinymceEditor.vue';
const editorRef = ref()
const content = ref("")
defineProps(['type', 'course']);
const baseUrl = ref("../../src/static/pdfjs/web/viewer.html?file=");
const fileUrl = ref("/Vue-3-Cheat-Sheet.pdf");
const previewUrl = computed(() => {
    return baseUrl.value + fileUrl.value
});
const course = {
    name: '计算机网络技术及应用实验',
    description: '计算机网络技术及应用实验',
    img: '/src/assets/cover/class1.webp'
}
const content1 = '<p style="line-height: 1.5;"><span style="font-size: 18pt;"><em><strong>JSON</strong></em></span></p> <p style="line-height: 1.5;"><strong>是JavaScript Object Notation的缩写, 它是一种数据交换格式</strong></p> <p style="line-height: 1.5;">在JSON出现之前, 大家一直用XML来传递数据。因为XML是一种纯文本格式, 所以它适合在网络上交换数据。XML本身不算复杂, 但是, 加上DTD、XSD、XPath、XSLT等一大堆复杂的规范以后, 任何正常的软件开发人员碰到XML都会感觉头大了, 最后大家发现, 即使你努力钻研几个月, 也未必搞得清楚XML的规范。</p> <p style="line-height: 1.5;">终于, 在2002年的一天, 道格拉斯&middot;克罗克福特（Douglas Crockford）同学为了拯救深陷水深火热同时又被某几个巨型软件企业长期愚弄的软件工程师, 发明了JSON这种超轻量级的数据交换格式。</p> <p style="line-height: 1.5;">道格拉斯同学长期担任雅虎的高级架构师, 自然钟情于JavaScript。他设计的JSON实际上是JavaScript的一个子集。在JSON中, 一共就这么几种数据类型:</p> <ul> <li><code><em><strong>number: 和JavaScript的number完全一致;</strong></em></code></li> <li><strong><em><code>boolean: 就是JavaScript的true或false;</code></em></strong></li> <li><strong><em><code>string: 就是JavaScript的string;</code></em></strong></li> <li><strong><em><code>null: 就是JavaScript的null;</code></em></strong></li> <li><strong><em><code>array: 就是JavaScript的Array表示方式&mdash;&mdash;[];</code></em></strong></li> <li><em><code><strong>object: 就是JavaScript的表示方式</strong>。</code></em></li> </ul> <p style="line-height: 1.5;">以及上面的任意组合。</p> <p style="line-height: 1.5;">并且, JSON还定死了字符集必须是UTF-8, 表示多语言就没有问题了。为了统一解析, JSON的字符串规定必须用双引号<code>""</code>, Object的键也必须用双引号<code>""</code>。</p> <p style="line-height: 1.5;">由于JSON非常简单, 很快就风靡Web世界, 并且成为ECMA标准。几乎所有编程语言都有解析JSON的库, 而在JavaScript中, 我们可以直接使用JSON, 因为JavaScript内置了JSON的解析。</p> <p style="line-height: 1.5;"><span style="color: rgb(35, 111, 161);">把任何JavaScript对象变成JSON, 就是把这个对象序列化成一个JSON格式的字符串, 这样才能够通过网络传递给其他计算机。</span></p> <p style="line-height: 1.5;">如果我们收到一个JSON格式的字符串, 只需要把它反序列化成一个JavaScript对象, 就可以在JavaScript中直接使用这个对象了。</p>'

const content2 = '<p><span style="font-size: 14pt;"><em><strong>题目描述:</strong></em></span></p> <blockquote> <p style="line-height: 1;"><strong>给你一个非负整数数组 <code>nums</code> ，你最初位于数组的第一个位置。</strong></p> <p style="line-height: 1;"><strong>数组中的每个元素代表你在该位置可以跳跃的最大长度。</strong></p> <p style="line-height: 1;"><strong>你的目标是使用最少的跳跃次数到达数组的最后一个位置。</strong></p> <p style="line-height: 1;"><strong>假设你总是可以到达数组的最后一个位置。</strong></p> </blockquote> <p><span style="background-color: rgb(251, 238, 184);"><em><strong>示例 1:</strong></em></span></p> <pre style="padding-left: 40px;"><span style="font-size: 12pt;"><strong>输入:</strong> nums = [2,3,1,1,4]<br></span><br><span style="font-size: 12pt;"><strong>输出: </strong>2<br></span><br><span style="font-size: 12pt;"><strong>解释:</strong> 跳到最后一个位置的最小跳跃数是 <code>2</code>。 从下标为 0 跳到下标为 1 的位置，</span><br><span style="font-size: 12pt;">跳&nbsp;<code>1</code>&nbsp;步，然后跳&nbsp;<code>3</code>&nbsp;步到达数组的最后一个位置。</span></pre> <p><span style="background-color: rgb(251, 238, 184);"><em><strong>示例 2:</strong></em></span></p> <pre style="padding-left: 40px;"><span style="font-size: 12pt;"><strong>输入:</strong> nums = [2,3,0,1,4]</span><br><br><span style="font-size: 12pt;"><strong>输出:</strong> 2<br><br></span></pre> <p><span style="font-size: 14pt;"><strong><span style="background-color: rgb(194, 224, 244);">提示:</span></strong></span></p> <p style="padding-left: 40px; line-height: 1;"><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></p> <p style="padding-left: 40px; line-height: 1;"><code>0 &lt;= nums[i] &lt;= 1000</code></p>'

</script>

<style scoped lang='scss'>
.returnButton {
    background-color: #3a5cad;
    margin-top: 7%;
    margin-bottom: 0%;
    width: 95%;
    border-radius: 10px;
    padding: 1%;
    margin-left: 2%;
}
.courseContent {
    display: grid;
    grid-template-columns: 1.2fr 4fr;
    grid-template-areas:
        "courseCard courseDetail"
        "courseMiniMenu .";
    grid-gap: 3%;
}

.courseCard {
    grid-area: courseCard;
}

.courseMiniMenu {
    grid-area: courseMiniMenu;
}

.courseDetail {
    grid-area: courseDetail;
    margin-left: 2%;
}

.pdf-frame {
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 85%;
    width: 56%;
    position: absolute;
    border: 3px;
    border-color: rgb(255, 255, 255);
    background-color: whitesmoke;
}

.TinyMCE {
    background-color: white;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3%;
    // margin: 0 auto;
    width: 70%;
    text-align: left;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
}
.TinyMCE-input {
    margin-top: 2%;
    background-color: white;
    padding-top: 3%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3%;
    // margin: 0 auto;
    width: 70%;
    text-align: left;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
}
</style>