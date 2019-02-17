<template>
    <button :key="index" class="list-group-item text-left" @click="clickButton">
        {{ title }}
    </button>
</template>

<script>
export default {
    props : ['title','index'],
    methods : {
        clickButton(){
            this.$emit('todoItemClick');
        }
    }
}
</script>

