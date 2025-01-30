<template>
    <h1 class="liked__title">Избранное</h1>
        <sneaker-list :sneakers="likedSneakers"></sneaker-list>
</template>
<script setup>
import { useStore } from 'vuex';
import SneakerList from '../components/SneakerList.vue';
import { useLikedSneakers } from '../composable/useLikedSneakers';

    const store = useStore();
    const likedSneakers = useLikedSneakers();
    
</script>
<style scoped>
.liked__title{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
}
</style>