import { onMounted, ref, toValue } from "vue";
import axios from "axios";

export function useSneakers() {
    const nextRef = ref('');

    const sneakers = ([]);
    const fetching = async () => {
        try {
            const response = await axios.get('http://localhost:90/api/sneakers');
            sneakers.value = response.data.sneakers.data;
            nextRef.value = response.data.sneakers.next_page_url;
            console.log(sneakers.value);
        } catch (e) {
            alert(e);
        }
    }

    onMounted(fetching)
    {
        return {
            sneakers,
            nextRef
        };
    }

}