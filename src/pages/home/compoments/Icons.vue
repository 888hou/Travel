<template>
    <div class="icons">
        <swiper :options="swiperOption" >
            <swiper-slide>
                <div class="icon" v-for="item of iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt=""/>
                    </div>
                    <p class="icon-desc">景点门票</p>
                </div>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt=""/>
                    </div>
                    <p class="icon-desc">景点门票</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            swiperOption: {
                loop: true
            },
            iconList: [
                {
                    id: '0001',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    desc: "景点门票"
                },
                {
                    id: '0002',
                    imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
                    desc: "自然风光"
                },
                {
                    id: '0003',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    desc: "秦皇岛必玩"
                },
                {
                    id: '0004',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    desc: "一日游"
                },
                {
                    id: '0005',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
                    desc: "庙会灯会"
                },
                {
                    id: '0006',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/35/9639025c30a3d802.png",
                    desc: "鸽子窝"
                },
                {
                    id: '0007',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png",
                    desc: "本地好玩"
                },
                {
                    id: '0008',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                    desc: "老龙头"
                },
                {
                    id: '0008',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
                    desc: "全部玩乐"
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .icons >>> .swiper-container
        width: 100%
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height :0
        padding-bottom: 25%
        .icon-desc
            position :absolute
            left:0
            right :0
            bottom :0
            text-align :center
            height : .44rem
            line-height :.44rem
            color :$darkTextColor
        .icon-img
            position : absolute
            top:0
            left:0
            right:0
            bottom:.44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display:block
                margin:0 auto
                height :100%
</style>
