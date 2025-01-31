<template>
    <div>
        <h1 class="sneakers__title">Все кроссовки</h1>
        <div class="searchbar">
            <form class="search">
                <input type="text" class="search__input" name="search" placeholder="Введите название кроссовок">
                <button type="button" class="search__button">Поиск</button>
            </form>
        </div>
        <sneaker-list :sneakers="sneakers">
        </sneaker-list>
        <div v-if="isLoading" class="loading">Загрузка...</div>
        <div class="infinity__scrollbar"></div>
    </div>
</template>
<script setup>
import SneakerList from '@/components/SneakerList.vue';
import { useStore } from 'vuex';
import {useSneakers} from "../composable/useSneakers";
import { onMounted, ref } from 'vue';
import axios from 'axios';

    const store = useStore();
    const sneakers = ref([]);
    const nextRef = ref('');
    const isLoading = ref(false);    

    const fetchSneakers = async () => {
        try{
            isLoading.value = true;
            const response = await axios.get('http://localhost:90/api/sneakers');
            sneakers.value = [...response.data.sneakers.data];
            nextRef.value = response.data.sneakers.next_page_url;  
        } catch (e) {
            alert(e);
        } finally {
            isLoading.value = false;
        }
    }

    const loadMoreSneakers = async () => {
        try{
            isLoading.value = true;
            const response = await axios.get(nextRef.value);
            sneakers.value = [...sneakers.value, ...response.data.sneakers.data];
            nextRef.value = response.data.sneakers.next_page_url;
            isLoading.value = false;
        } catch (e) {
            console.log(e)
            isLoading.value = false;
        }
    }

    onMounted(() => {
        fetchSneakers();
        const observer = new IntersectionObserver((entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) {
        // console.log(sneakers.value);
        loadMoreSneakers();
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

.searchbar{
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search{
    display: flex;
    gap: 20px;
}
.search__input{
    padding: 7px 10px;
    font-family: 16px;
    width: 50vw;
    border: 2px solid rgb(244,87,0);
    border-image: linear-gradient(90deg, rgba(244,87,0,1) 4%, rgba(196,201,0,0.7080883378742122) 67%, rgba(249,247,0,1) 100%);
    border-image-slice: 4;
    border-radius: 15px;

}

.search__button{
    border: 3px solid red;
    color: black;
}

.loading{
    height: 100vh;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
}

.infinity__scrollbar{
    margin-top: 30px;
    height: 30px;
}
</style>