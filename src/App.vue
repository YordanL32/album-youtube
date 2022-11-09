<template>
 <ListVideos/>
</template>
<script setup>
import { onMounted } from 'vue';
import ListVideos from './components/ListVideos.vue'
import {useAlbumStore}from './composables/useAlbum'
const {loadVideos} = useAlbumStore()
onMounted(() =>{
    loadVideos()
})
</script>
<style scoped>

</style>
