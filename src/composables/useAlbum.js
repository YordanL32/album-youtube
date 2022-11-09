import { storeToRefs } from "pinia"
import { useAlbum } from "../store"
import { ref } from 'vue';
import Swal from '../helpers/sweetAlert';
export const useAlbumStore = () => {
    const useAlbumS = useAlbum()
    const msj = ref(false)
    const open = ref(false)
    const id = ref(null)
    const { videos, datailsVideo, error, isLoading } = storeToRefs(useAlbumS)
    const loadVideos = async () => await useAlbumS.loadVideos()
    const addVideos = async (link = '') => {
        try {
            let idVideo = ''
            let { host, pathname } = new URL(link);
            if (host === 'www.youtube.com') {
                let array = []
                const searchParams = new URLSearchParams(link);
                for (const p of searchParams) {
                    console.log(p);
                    array.push(...p)
                }
                idVideo = array[1]
            } else if (host === 'youtu.be') {
                idVideo = pathname.split('/')[1]
            } else {
                error.value = 'Enlace incorrecto'
                Swal.alertCreate('Error', error.value, 'error')
            }
            await useAlbumS.addVideo(idVideo)           
        } catch (error) {
            error.value = 'Enlace incorrecto'
            Swal.alertCreate('Error', error.value, 'error')
        }
    }
    const removeVideo =  (video) => {
         Swal.alertInfoConfirm(video).then(async({ isConfirmed }) => {
            if (isConfirmed) {
                await useAlbumS.deleteVideo(video.id)
                Swal.alertCreate('Video Eliminado', 'Video eliminado exitosamente', 'success')
            }
        })
        msj.value = false
    }
    return {
        msj,
        open,
        id,
        error,
        datailsVideo,
        removeVideo,
        videos,
        addVideos,
        loadVideos,
        isLoading
    }
}