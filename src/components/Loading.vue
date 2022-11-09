<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="div" :show="isLoading">
    <Dialog as="div" class="absolute z-10">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed  z-10 inset-0 overflow-y-auto">
        <div class="flex items-center sm:items-center justify-center min-h-full p-4 text-center ">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <div class="bg-white px-4 pt-5  ">
                <div class="text-center items-center">
                  <div class="mt-3 text-center sm:mt-0  ">
                    <DialogTitle as="h3" class="items-center text-sm mx-auto leading-6 font-medium text-gray-900">
                      <i class="rotate fa-solid fa-spinner fa-3x text-blue-pred-200"></i>
                    </DialogTitle>
                  </div>
                </div>
                <button className="h-0 w-0 overflow-hidden" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
defineProps(
  { isLoading: Boolean, default: false }
)
</script>
<style>
.rotate {
  animation: rotation 1.5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>