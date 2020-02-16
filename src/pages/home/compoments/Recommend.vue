<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
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
                    desc: '放下工作，带宝贝出发，和孩子一起玩才是正经事！'
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
    .item
        overflow:hidden
        display: flex
        height : 1.9rem
        .item-img
            width : 1.7rem
            height : 1.7rem
            padding : .1rem
        .item-info
            flex: 1
            padding : .1rem
            min-width : 0
            .item-title
                line-height : .4rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height : .4rem
                color: #cccccc
                ellipsis()
            .item-button
                line-height :.44rem
                margin-top : .16rem
                background : #ff9300
                padding : 0 .2rem
                border-radius : .06rem
                color: #fff
</style>
