<template>
    <div>
        <button class="ref" @click="opencCart">
                <img src="/icons/cart.svg" alt="">
                {{ cartCost }} руб.
        </button>
        <my-sidebar :is-visibility="isVisibility" @hideSidebar="hideCart"></my-sidebar>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import MySidebar from './MySidebar.vue';

    const isVisibility = ref(false);
    defineProps({
        cartCost: {
            type: String,
            required: true
        }
    });

    const opencCart = () => {
        isVisibility.value = true;
    };

    const hideCart = () => {
        isVisibility.value = false;
    }

</script>
<style>
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
</style>