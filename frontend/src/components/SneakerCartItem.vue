<template>
    <div class="cart__item item">
        <div class="item__img">
            <img :src="sneaker.img" alt="">
        </div>
        <div class="item__info">
            <div class="item__title">{{ sneaker.title }}</div>
            <div class="item__subtitle">
                <div class="item__cost">{{ sneaker.cost }} руб.</div>
                <button class="item__close" @click="removeSneakerFromCart(sneaker)">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        sneaker: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeSneakerFromCart(sneaker)
        {
            this.$emit('removeSneakerFromCart', sneaker);
        },
    }
}

</script>
<style scoped>
.cart__item{
    display: flex;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 20px;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.item__img img{
    width: 70px;
    height: 70px;
    align-items: center;
}

.item__info{
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

.item__title{
    font-weight: 400;
}

.item__subtitle{
    display: flex;
    justify-content: space-between;
}

.item__cost
{
    font-weight: 700;
    margin-right: 88px;
}

.item__close{
    cursor: pointer;
    transition: all .3s;
}

.item__close:hover{
    transform: scale(1.1);
}
</style>