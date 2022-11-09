<template>
    <div class="relative text-center  sm:max-w-lg w-44 mx-2">
      <div class="absolute top-2 right-0">
            <button class="flex font-bold bg-black text-white py-0 px-1" @click="removeVideo(video)" >X</button>
        </div>
        <div class="items-center shadow-lg w-full  border border-2 mx-2" @click="open = true">            
            <img :src="video.medium.url" alt="" :width="video.medium.width" :height="video.medium.height">
           <div class="absolute bottom-1 right-0 ">
              <span class="px-1 font-bold bg-black text-white">
                {{ video.duration }}
            </span> 
           </div>
             
           </div>          
        <DetailsVideo :video="video" :open="open" @close="open = false" />      
    </div>
</template>
<script setup>
import DetailsVideo from './DetailsVideo.vue'
import { useAlbumStore } from '../composables/useAlbum'
const { removeVideo , open} = useAlbumStore()
defineProps(
    { video: Object, default: null }
)
</script>

