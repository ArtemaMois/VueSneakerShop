<template>
    <div>
        <h1 class="sneakers__title">Все кроссовки</h1>
        <sneaker-list :sneakers="store.getters.getSneakers">
        </sneaker-list>
    </div>
</template>
<script setup>
import SneakerList from '@/components/SneakerList.vue';
import { useStore } from 'vuex';

    const store = useStore();
    
</script>
<style scoped>
.sneakers__title{
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
}
</style>