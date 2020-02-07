import Swal from 'sweetalert2';

function error(args) {
    const config = {
        title: 'Error',
        text: 'An error has occured',
        icon: 'error',
        ...(args || {})
    };

    Swal.fire(config);
} 

function success(args) {
    const config = {
        title: 'Success',
        text: 'Completed successfully',
        icon: 'success',
        timer: 2000,
        ...(args || {})
    };

    Swal.fire(config);
}

function confirmation(args) {
    const config = {
        title: 'Confirmation',
        text: 'Are you sure you want to proceed?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        ...(args || {})
    };

    return Swal.fire(config);
}

export default {
    error,
    success,
    confirmation
}