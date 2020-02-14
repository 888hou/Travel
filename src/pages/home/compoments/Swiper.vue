<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-image" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 2000
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: "http://img1.qunarzz.com/sight/source/1511/2b/5e0923cd15e06.jpg_r_640x214_b9c024c1.jpg"
                },
                {
                    id: '0002',
                    imgUrl: "http://img1.qunarzz.com/sight/source/1811/db/1f83f4f536ea10.jpg_r_640x214_4f7d9ee8.jpg"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37.25%
    background: #ccc

    .swiper-image
        width: 100%
</style>
