<template>
    <div class="sneakers">
        <sneaker-item class="sneaker__items"
         v-for="sneaker in sneakers" 
         :key="sneaker.id" 
         :sneaker="sneaker" 
         @addSneakerToCart="addSneakerToCart" 
         @removeSneakerToCart="removeSneakerFromCart"
         @addSneakerToLiked="addSneakerToLike"
         @removeSneakerFromLiked="removeSneakerFromLiked"
         >
        </sneaker-item>
    </div>      
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import SneakerItem from './SneakerItem.vue';
import { mapState, mapActions, mapGetters, mapMutations, useStore } from 'vuex';
import { useAddLikedItem } from '../composable/useAddLikedItem';
import { useRemoveLikedItem } from '../composable/useRemoveLikedItem';

    defineProps({
        sneakers: Array
    });
    const store = useStore();
    const addSneakerToCart = (sneaker) => store.dispatch('addSneakerToCart', sneaker);
    const removeSneakerFromCart = (sneaker) => store.dispatch('removeSneakerFromCart', sneaker);
    const addSneakerToLike = (sneaker) => useAddLikedItem(sneaker, store);
    const removeSneakerFromLiked = (sneaker) => useRemoveLikedItem(sneaker, store);

</script>
<style>
.sneakers{
    display: grid;
    grid-template-columns: 210px 210px 210px 210px;
    column-gap: 60px;
    row-gap: 40px;
    
}
</style>