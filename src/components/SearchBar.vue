<template>
    <div class="mx-4">
        <label for="search" class="font-semibold ">Añadir nuevo video</label><br>
        <div class="sm:flex my-2">
            <input v-model="link" class="w-full rounded-md  relative block w-full px-3 py-2 border  
          placeholder-gray-500 text-gray-900  
          focus:outline-none focus:ring-indigo-500 
          focus:border-blue-pred-400 focus:z-10 sm:text-sm" type="text" id="search" placeholder="Añadir">
            <button  :class="(link) ? '' : 'opacity-50 pointer-events-none'"  class="bg-blue-pred-400 w-full  sm:w-56 text-white px-4 py-2  rounded-md " @click="addVideos(link)">Añadir</button>
        </div>
    </div>
</template>
<script setup>
import {useAlbumStore} from '../composables/useAlbum'
const {addVideos, link} = useAlbumStore()

</script>
