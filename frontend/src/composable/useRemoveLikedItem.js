export function useRemoveLikedItem(sneaker, store)
{
    let likedItems = JSON.parse(localStorage.getItem('likedSneakers'));
    likedItems = likedItems.filter((item) => item !== sneaker.id);
    console.log(likedItems);
    localStorage.setItem('likedSneakers', JSON.stringify(likedItems));
    store.getters.getSneakers.forEach((item) => {
        if(item.id === sneaker.id)
        {
            item.isLiked = false;
        }
    })

}