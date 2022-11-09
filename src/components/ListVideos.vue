<template> 
    <div class="flex justify-center mx-5 my-10">
        <div class="w-8/12">
            <SearchBar />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 my-10 ">              
                <CardVideo v-for="video of videos" :key="video.id" class="w-full" :video="video" />
            </div>
        </div>
        <Loading :isLoading="isLoading" />
    </div>
</template>
<script setup>
import SearchBar from './SearchBar.vue'
import CardVideo from './CardVideo.vue'
import Loading from './Loading.vue'
import { useAlbumStore } from '../composables/useAlbum'
const { videos,isLoading} = useAlbumStore()
</script>