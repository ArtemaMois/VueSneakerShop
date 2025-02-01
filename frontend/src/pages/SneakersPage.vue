<template>
    <div>
        <h1 class="sneakers__title">Все кроссовки</h1>
        <div class="searchbar">
            <form class="search"  @submit.prevent>
                <input type="text" class="search__input" v-model="filterInput" name="search" placeholder="Введите название кроссовок" @keyup.enter="filterQuery">
                <button type="button" class="search__button" @keyup.enter="filterQuery" @click="filterQuery">Поиск</button>
            </form>
            <my-select v-model="selectField" @change="sortQuery" :options="sortedFields"></my-select>
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
import { computed, onMounted, ref, warn, watch } from 'vue';
import axios from 'axios';
    const store = useStore();
    const sneakers = ref([]);
    const filterInput = ref('');
    const nextRef = ref('');
    const isLoading = ref(false);  
    const selectField = ref('');
    const sortedFields = ref(
        [
            {
                name: 'Название',
                value: 'title'
            },
            {
                name: 'Цена',
                value: 'cost'
            },
        ]
    );

    const sortQuery = async () => {
        try{
            isLoading.value = true;
            const response = await axios('http://localhost:90/api/sneakers?sort=' + selectField.value);
            sneakers.value = [...response.data.sneakers.data];
            nextRef.value = response.data.sneakers.next_page_url;  
        } catch(e)
        {
            console.log(e.code);
        } finally{
            isLoading.value = false;
        }
    }

    
    const filterQuery = async () => {
        try{
            isLoading.value = true;
            const response = await axios('http://localhost:90/api/sneakers?search=' + filterInput.value);
            sneakers.value = response.data.sneakers.data;
            console.log(response.data.sneakers.data);
            nextRef.value = response.data.sneakers.next_page_url;  
        } catch(e)
        {
            console.log(e.code);
        } finally{
            isLoading.value = false;
        }
    }

    const fetchSneakers = async () => {
        try{
            isLoading.value = true;
            const response = await axios.get('http://localhost:90/api/sneakers');
            sneakers.value = response.data.sneakers.data;
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

    const searchItem = async () => {
        try{

        } catch (e) {
            console.log(e);
            isLoading.value = true;
        }
    }

    onMounted(() => {
        fetchSneakers();
        const observer = new IntersectionObserver((entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
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
    gap: 30px;
}

.search{
    display: flex;
    gap: 20px;
}
.search__input{
    padding: 7px 10px;
    font-family: 16px;
    width: 50vw;
    font-family: 'Inter', sans-serif;
    border: 2px solid rgb(244,87,0);
    border-image: linear-gradient(90deg, rgba(244,87,0,1) 4%, rgba(196,201,0,0.7080883378742122) 67%, rgba(249,247,0,1) 100%);
    border-image-slice: 4;
    border-radius: 15px;
}

.search__button{
    background-color: #da4f6e;
    background-image: linear-gradient(60deg, #e85475 10%, #d48444 50%, #efcb0a 100%);
    color: #f7f4f4;
    border-radius: 50px;
    padding: 12px 48px; 
    box-shadow: 0px 0px 9px 2px rgba(195, 195, 195, 0.35);
    transition: all 0.5s ease;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.search__button:hover{
    background-color: #efcb0a;
    background-image: linear-gradient(30deg, #efcb0a 10%, #d48444 50%,#e85475 100%);
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