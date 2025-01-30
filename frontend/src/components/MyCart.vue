<template>
        <div class="cart">
            <div class="cart__header">
                <button @click="hideCart" class="cart__hide-button">
                    <svg class="cart__hide-arrow" width="25" height="25" viewBox="0 0 16 14" fill="gray" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H14.7143" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <h2 class="cart__title">Корзина</h2>
            </div>
            <div class="cart__body">
                <sneaker-cart-list class="cart__list"></sneaker-cart-list>
                <div class="cart__footer">
                    <div class="cart__sum" >
                        <div class="cart__sum-title">Итого:</div>
                        <div class="cart__sum-value">{{ store.getters.getCartCost }}</div>
                    </div>
                    <button class="button">
                        <span>Оформить заказ</span>
                    </button>
                </div>
            </div>
        </div>
</template>
<script>
import { useStore } from 'vuex';
import SneakerCartList from './SneakerCartList.vue';
export default {
    components: {
        SneakerCartList
    },
    setup()
    {
        const store = useStore();

        return {
            store
        }
    },
    methods: {
        hideCart()
        {
            this.$emit('hideCart');
        }
    }
}
</script>
<style>


.cart{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.cart__header{
    display: flex;
    gap: 30px;
    align-items: center;
}

.cart__hide-button{
    rotate: 180deg ;
    cursor: pointer;
    transition: all .3s;
}

.cart__hide-button:hover{
    transform: translateX(10px);
}

.cart__body{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 750px;
}

.cart__list{
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    padding: 15px;
    width: 100%;
}

.cart__footer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart__sum{
    display: flex;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
}




.cart__sum-value{
    font-weight: 600;
}

.button
{
    background-color: teal;
    padding: 15px;
    border-radius: 25px;
    color: white;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;
    display: block;
}

.button:hover
{
    background-color: rgb(13, 80, 80);
    transform: translateY(5px);
}
.cart__title
{
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
</style>