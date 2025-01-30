<template>
    <div>
        <h1 class="sneakers__title">Все кроссовки</h1>
        <sneaker-list :sneakers="sneakers">
        </sneaker-list>
        <div class="infinity__scrollbar"></div>
    </div>
</template>
<script setup>
import SneakerList from '@/components/SneakerList.vue';
import { useStore } from 'vuex';
import {useSneakers} from "../composable/useSneakers";
import { onMounted } from 'vue';

    const store = useStore();
    const {sneakers, nextRef} = useSneakers();
    
    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) {
    }
    });

    const elem = document.querySelector('.infinity__scrollbar');
    observer.observe(elem)
    })
</script>
<style scoped>
.sneakers__title{
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
}

.infinity__scrollbar{
    margin-top: 30px;
    height: 30px;
    background-color: aqua;
}
</style>