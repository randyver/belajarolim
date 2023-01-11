function isMulai(element){
    const url = element.getAttribute("data-href");
    Swal.fire({
            title: "Mulai Try Out",
            text: "Apakah Anda ingin mulai mengerjakan Try Out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya',
            cancelButtonText: 'Tidak'
        }).then((result) => {
            if (result.value) {
                window.location.href = url;
            }else{
               Swal.close();
            }
        })
}