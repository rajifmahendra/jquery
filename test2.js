$(document).ready(function(){

	// Membuat variabel yg menampung nilai awal nya adalah 1
	var total_member = 1;

	// Membuat method baru untuk tambah
	function tambahMember(){

		// Variable N ada isi dari variabel awal(total_member yg isi nya 1) di tambah 1
		var n = total_member + 1;

		var isi = '<div class="member" id="tambahmember'+total_member+'" style="display:none">';

		isi += '<hr>';

		isi += '<div class="input"><input type="text" name="nama'+n+'" required placeholder="Nama Lengkap ke-'+n+'"></div><div class="input"><input type="text" name="alamat'+n+'" required placeholder="Alamat ke-'+n+'"></div><div class="input"><input type="email" name="email'+n+'" required placeholder="Email ke-'+n+'"></div><div class="input"><input type="text" name="no_hp'+n+'" required placeholder="Nomor Handphone ke-'+n+'"></div>';

		isi += '</div>';

		$('a.tambahmember').before(isi);
		$('#tambahmember'+total_member).slideDown('medium');

		// Maksud ++ disini adalah nilai di tambah 1
		total_member++;
	}

	// Membuat method baru untuk kurang
	function hapusMember(){
		// Makasud -- disini adalah nilai di kurang 1
		total_member--;
		// Jika total_member(nilai awal 1) lebih kecil = 1 maka akan menghilang
		if(total_member<=1){
			total_member = 1;
		}
		$('#tambahmember'+total_member).slideUp('medium', function(){
			$(this).remove();
		});
	}

	//a.tambahMember maksudnya adalah ketika klik dia menjalankan tambah dari method tambahMember() yg sudah di buat di atas
	$('a.tambahmember').click(function(){
		tambahMember();
	});
//a.tambahMember maksudnya adalah ketika klik dia menjalankan hapus dari method hapusMember() yg sudah di buat di atas
	$('a.hapusmember').click(function(){
		hapusMember();
	});

});
