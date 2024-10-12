<script>
    import Navigasi from '../lib/Navigasi.svelte'
    import gambar from '../lib/diri.jpg'
</script>

<Navigasi/>
<main>
    <!-- <div class="atas">

    </div>
    <div class="bawah">

    </div> -->
    <img src="{gambar}" alt="diriansyah">
    <h1>Diriansyah</h1>
    <p>Lulusan mahasiswa jurusan Matematika di Universitas Negeri Jakarta 2017 yang memiliki hobi yaitu ngoding</p>
</main>

<style>
    main {
        font-family: Tahoma, Verdana, sans-serif;
        /* background-color: red; */
        background: linear-gradient(to bottom, white 40%, hsl(137, 100%, 36%) 60%);
        width: 90%;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main img {
        border-radius: 50%;
        border: 2px solid black;
        height: 30%;
        width: 30%;
        margin: 30px;
    }

    h1 {
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        text-align: center;
    }
</style>