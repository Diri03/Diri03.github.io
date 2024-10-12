<script>
    import Navigasi from "../../lib/Navigasi.svelte";
    
    function hitungUmur(){
        const time = new Date();
        const tanggalLahirObj = new Date("1998-11-24");
        const selisihWaktu = time - tanggalLahirObj;
        const umurTahun = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 365.25));
        return umurTahun;
    }

    const umur = hitungUmur();
</script>

<Navigasi/>
<main>
    <h1>Tentang Saya</h1>
    <p>Saya merupakan programmer yang berfokus pada bidang analisis data dan web development</p>
    <table>
        <tr>
            <td>Nama</td>
            <td>: Diriansyah</td>
        </tr>
        <tr>
            <td>Tempat, tanggal lahir</td>
            <td>: Tangerang, 24 November 1998</td>
        </tr>
        <tr>
            <td>Tempat tinggal</td>
            <td>: Senen, Jakarta Pusat</td>
        </tr>
        <tr>
            <td>Umur</td>
            <td>: {umur} tahun</td>
        </tr>
        <tr>
            <td>Pendidikan</td>
            <td>: S1 Matematika</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>: diriansyah03@gmail.com</td>
        </tr>
    </table>
    <p>Saya mempelajari pemrograman melalui berbagai pelatihan yang diikuti secara daring. Untuk meningkatkan kemampuan sebagai seorang programmer, saya secara rutin menyelesaikan masalah pemrograman dari situs-situs seperti CodeAbbey. Selain itu, saya juga mengikuti kursus-kursus daring gratis dan mempelajari tutorial dari YouTube. Beberapa bahasa pemrograman dan teknologi yang saat ini saya kuasai adalah:</p>
    <div class="bahasa">
        <div class="pemrograman">HTML</div>
        <div class="pemrograman">CSS</div>
        <div class="pemrograman">JavaScript</div>
        <div class="pemrograman">SQL</div>
        <div class="pemrograman">Java</div>
        <div class="pemrograman">Python</div>
        <div class="pemrograman">Machine Learning</div>
        <div class="pemrograman">Microsoft Excel</div>
        <div class="pemrograman">R</div>
        <div class="pemrograman">C#</div>
        <div class="pemrograman">Svelte</div>
        <div class="pemrograman">Springboot</div>
    </div>
</main>

<style>
    main {
        background-color: hsl(211, 13%, 94%);
        font-family: Tahoma, Verdana, sans-serif;
        width: 90%;
        height: 100vh;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    table {
        margin: 20px 5px;
    }

    p {
        text-align: justify;
    }

    .bahasa {
        /* background-color: red; */
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        flex-wrap: wrap;
    }

    .pemrograman {
        border: 1px solid black;
        background-color: hsl(137, 100%, 36%);
        color: white;
        text-align: center;
        margin: 20px 0 auto;
        width: 22%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pemrograman:hover {
        background-color: hsl(137, 100%, 24%);
        color: #ddd;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .pemrograman {
            width: 44%;
        }
    }

    @media (max-width: 480px) {
        .pemrograman {
            width: 44%;
        }

        table {
            font-size: 11px;
        }
    }
</style>