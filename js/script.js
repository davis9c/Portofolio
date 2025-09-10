$(document).ready(function () {
    console.log("Halaman sudah siap dimuat!");

    // Cek saat modal mau ditutup
    $('#welcomeModal').on('hide.bs.modal', function (event) {
        const nama = $('#nama_pengunjung').val().trim();

        if (!nama) {
            event.preventDefault(); // Batalkan penutupan modal
            $('#nama_pengunjung').addClass('is-invalid');
            $('#peringatan-wajib').html('<div class="alert alert-danger" role="alert">WAJIB ISI NAMA!</div>');
        }
    });

    // Saat modal sudah benar-benar ditutup
    $('#welcomeModal').on('hidden.bs.modal', function () {
        const nama = $('#nama_pengunjung').val().trim();
        myModal.hide();
        $('#pengunjung').text(nama);
        $('#nama_pengunjung_email').val(nama);
        $('#message_wa').val('Hallo, Saya ' + nama + ', saya ingin bertanya tentang layanan Anda.');
        console.log("Nama pengunjung:", nama);
    });

    // Tampilkan modal saat halaman dimuat
    const myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    myModal.show();

    // fitur go to top
     $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('#btnGoTop').fadeIn();
      } else {
        $('#btnGoTop').fadeOut();
      }
    });

    // Klik tombol → scroll ke atas
    $('#btnGoTop').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
});


