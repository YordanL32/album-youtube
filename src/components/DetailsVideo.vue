<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative  rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
                            <div class="bg-white px-2 pt-5 pb-4 sm:px-8 sm:pb-4">
                                <div class="sm:flex sm:items-center">
                                    <div class="mt-1 text-center sm:mt-0 sm:ml-2 sm:text-left">
                                        <div class="mt-2">
                                            <div class="flex justify-end">
                                                <button class="font-bold" @click="$emit('close', false)">X</button>
                                            </div>

                                            <div
                                                class=" sm:flex items-center justify-center scale-2 py-2 sm:px-6 lg:px-6">
                                                <div class="mx-5 sm:mx-1">
                                                    <iframe height="315" class="w-72  sm:w-96"
                                                        :src="`https://www.youtube.com/embed/${video.idVideo}`"
                                                        :title="video.title" frameborder="0"
                                                        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen>
                                                    </iframe>
                                                </div>
                                                <div class="p-2 w-88 sm:w-96 items-center">
                                                    <div class="rounded-md shadow-sm">
                                                        <div class="flex justify-center mb-4">
                                                            <h2
                                                                class="mt-1 px-5 text-center text-lg font-extrabold text-gray-700">
                                                                {{ video.title }} ({{ video.duration }})
                                                            </h2>
                                                        </div>
                                                        <div class="w-auto py-2 h-72 px-2 overflow-y-auto">
                                                            {{ video.description }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
defineProps({
    open: { type: Boolean, default: false },
    video: { type: Object, default: null }
})

</script>