<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            weekendList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
                    title: '秦皇岛亲子游',
                    desc: '放下工作，带宝贝出发，和孩子一起玩才是正经事！'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
                    title: '秦皇岛亲子游',
                    desc: '放下工作，带宝贝出发，和孩子一起玩才是正经事！'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
                    title: '秦皇岛亲子游',
                    desc: '放下工作，带宝贝出发，和孩子一起玩才是正经事！'
                },
                {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
                    title: '秦皇岛亲子游',
                    desc: '放下工作，带宝贝出发，和孩子一起玩才是正经事放下工作，带宝贝出发，和孩子一起玩才是正经事！'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height : .8rem
        background : #eeeeee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height :0
        padding-bottom : 33.9%
        .item-img
            width: 100%
    .item-info
        padding : .1rem
        .item-title
            line-height : .4rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height : .4rem
            color: #cccccc
            ellipsis()
</style>
