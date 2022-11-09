import Swal from 'sweetalert2';
export default {
    alertCreate(title, html, icon) {
        Swal.fire({
            title,
            html,
            icon,
            confirmButtonColor: '#136AE4'
        }
        )
    },
    alertInfoConfirm({ title }) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                htmlContainer: 'mx-20',
                confirmButton: `px-10 my-2 sm:my-0 sm:mx-4 w-56 sm:w-44 rounded-md 
              border border-gray-300 shadow-sm sm:px-4 py-2 bg-blue-pred-400 text-white font-semibold`,
                cancelButton: `px-10 rounded-md border w-56 sm:w-44 
              border-blue-pred-400 shadow-sm sm:px-4 py-2 bg-white text-blue-pred-400 font-semibold`
            },
            buttonsStyling: false
        })
        return swalWithBootstrapButtons.fire({
            icon: 'info',
            width: '500',
            title: `¿<span class="my-5">Seguro que quieres eliminar este video:</span>  <br> <b>${title}</b> ?`,
            toast: true,
            reverseButtons: true,
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: '<div class="mx-10 " ><button><small  >Cancelar</small></button></div>',
            confirmButtonText: '<div class="mx-10" ><button ><small >Continuar</small></button></div> '
        })
    }
};