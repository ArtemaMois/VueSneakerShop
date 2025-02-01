<template>
    <div>
        <select :value="modelValue" @change="changeSelect">
            <option value="" disabled>Выберите из списка</option>
            <option  
            v-for="option in options" 
            :key="option.value"
            :value="option.value">
            {{ option.name }}
        </option>
        </select>
    </div>
</template>
<script>

export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        options: {
            type: Array
        }
    },
    methods: {
        changeSelect(event)
        {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped>
</style>