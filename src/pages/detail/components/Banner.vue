<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201311/11/4bd3e51dc4c0d5c8c8d65eac.jpg_600x330_366480f4.jpg" />
            <div class="banner-info">
                <div class="banner-title">紫云山滑雪场</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe629;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/201311/11/4bd3e51dc4c0d5c8c8d65eac.jpg_600x330_366480f4.jpg', 'http://img1.qunarzz.com/sight/p0/201311/11/4bd3e51dc4c0d5c8c8d65eac.jpg_600x330_366480f4.jpg']
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick () {
            this.showGallary = !this.showGallary
        },
        handleGallaryClick () {
            this.showGallary = !this.showGallary
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #ffffff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                padding: 0 .4rem
                margin-top: .14rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
