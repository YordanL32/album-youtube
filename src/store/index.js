import { defineStore } from 'pinia'
import Swal from '../helpers/sweetAlert'
import { ApiFirebase ,ApiYoutube} from '../api'

const key = import.meta.env.VITE_API_KEY
export const useAlbum = defineStore('album', {
    // state,
    id: 'album',
    state: () => ({
        videos: [],
        datailsVideo: {},
        error: null,
        isLoading: false
    }),
    actions: {
        async loadVideos() {
            try {
                this.isLoading = true
                const { data } = await ApiFirebase.get('/videos.json')                
                if(!data) return this.videos = []
                const items = []
                for (let id of Object.keys(data)) {
                    items.push({id,...data[id]})
                }
                this.videos = items
                this.isLoading = false
               
            } catch (error) {
                this.isLoading = false
                return Promise.reject(error)
            }
        },
        async addVideo(id) {//crear nuevo rol al perfil
            try {
                this.isLoading = true
                 const existVideo = this.videos?.find(video => video.idVideo === id)
                if (existVideo) {
                    this.isLoading = false
                    Swal.alertCreate('Error', `el siguiente Video se encuentra Repetido:<br><b>${existVideo.title}</b> `, 'error')
                    return this.error = 'Video Repetido'
                }               
                const data = await ApiYoutube.get('videos', { params: { key, id, part: 'snippet,contentDetails,statistics,status' } })
                if (data.data.items.length < 1) {
                    this.isLoading = false
                    Swal.alertCreate('Error', 'Video inexistente', 'error')
                    return this.error = 'Video inexistente'
                }                
                const { snippet, contentDetails, id: idVideo } = data.data.items[0]                    
                const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
                const regex_result = regex.exec(contentDetails.duration); //Can be anything like PT2M23S / PT2M / PT28S / PT5H22M31S / PT3H/ PT1H6M /PT1H6S
                const hours = parseInt(regex_result[1] || 0);
                const minutes = parseInt(regex_result[2] || 0);
                const seconds = parseInt(regex_result[3] || 0);
                // var total_seconds = hours * 60 * 60 + minutes * 60 + seconds; 
                this.datailsVideo = {
                    idVideo,
                    title: snippet.title,
                    medium: snippet.thumbnails.medium,
                    description: snippet.description,
                    duration: (hours > 0) ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
                }
                const {data:data1} = await ApiFirebase.post('/videos.json', this.datailsVideo)
                this.datailsVideo.id = data1.name
                this.videos.unshift(this.datailsVideo)
                this.isLoading = false
                Swal.alertCreate('Video Añadido', '¡¡Video Añadido con exito!!', 'success')
                this.error = null
            } catch (error) {            
                this.isLoading = false
                return Promise.reject(error)
            }
        },
        async deleteVideo(id) {
            try {
                if (!id) return 
                await ApiFirebase.delete(`/videos/${id}.json`)
                this.videos = this.videos.filter(video => video.id !== id)
            } catch (error) {
                console.log(error)
            }
        }
    },

})