<template>
    <div class="sneaker__cart-list">
        <sneaker-cart-item 
        v-for="sneaker in sneakers" 
         :key="sneaker.id" 
         :sneaker="sneaker" 
         @removeSneakerFromCart="removeSneakerFromCart"
         ></sneaker-cart-item>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import SneakerCartItem from './SneakerCartItem';
import { computed } from 'vue';
export default{
    components: {
        SneakerCartItem
    },
    setup()
    {
        const store = useStore();
        const sneakers = computed(() => {
            return store.getters.getCart; 
        });

        const removeSneakerFromCart = (sneaker) => store.dispatch('removeSneakerFromCart', sneaker);
        return {
            sneakers,
            removeSneakerFromCart
        }
    }
}
</script>
<style scoped>
.sneaker__cart-list{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>