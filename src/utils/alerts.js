import Swal from 'sweetalert2';

function success(args) {
    const config = {
        title: 'Success',
        text: 'Completed successfully',
        icon: 'success',
        timer: 2000,
        ...(args || {})
    };

    return Swal.fire(config);
} 

export default {
    success
}