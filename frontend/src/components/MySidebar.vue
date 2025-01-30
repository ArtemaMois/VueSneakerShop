<template>
    <div v-if="isVisibility">
        <div class="sidebar__wrapper" @click="hideSidebar">
        </div>
        <div  class="sidebar">
            <my-cart @hideCart="hideSidebar"></my-cart>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import MyCart from './MyCart.vue';

export default {
    components: {
        MyCart
    }, 
    props:
    {
        isVisibility: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        hideSidebar()
        {
            this.$emit('hideSidebar');
        }
    }
}
</script>
<style>
.sidebar__wrapper{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 10;
}
.sidebar{
    position: fixed;
    min-height: 100%;
    width: 385px;
    padding: 30px;
    top: 0;
    right: 0;
    z-index: 20;
    background-color: white;
}
</style>
