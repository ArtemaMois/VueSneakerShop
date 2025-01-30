<template>
    <nav class="navbar">
        <div class="logo">
            <img src="/icons/logo.png" alt="">
            <div class="logo__text">
                <div class="logo__title">vue sneakers</div>
                <div class="logo__subtitle">Магазин лучших кроссовок</div>
            </div>
        </div>
        <div class="refs">
            <router-link class="ref" to="/">Каталог</router-link>
            <cart-ref :cartCost="store.getters.getCartCost"></cart-ref>
            <router-link class="ref" to="/liked">
                <img src="/icons/heart.svg" alt="">
                {{ store.getters.getLikedSneakersCount }}
            </router-link>
            <router-link class="ref" to="/">
                <img src="/icons/profile.svg" alt="">
                Профиль
            </router-link>
        </div>
    </nav>  
</template>
<script>
import { useStore } from 'vuex';
import MyCart from './MyCart.vue';
import { RouterLink } from 'vue-router';
import CartRef from './CartRef.vue';
export default{
    components:
    {
        RouterLink,
        MyCart,
        CartRef
    },
    setup()
    {
        const store = useStore();

        return {
            store,
        }
    }
}

</script>
<style scoped>
.navbar{
    z-index: 1;
    padding: 42px 60px 45px 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.refs{
    display: flex;
    justify-content: space-between;
    gap: 32px;
}

.ref{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: rgb(92, 92, 92);
    display: flex;
    gap: 10px;
    padding: 15px;
    transition: all .3s;
    border-radius: 15px;
}

.ref:hover{
    background-color: rgb(233, 233, 233);
}

.logo{
    display: flex;
    gap: 16px;
}

.logo img{
    width: 40px;
    height: 40px;

}

.logo__text
{
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;}

.logo__title{
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
}
.logo__subtitle{
    font-size: 14px;
    color: rgba(157, 157, 157, 1);
}
</style>