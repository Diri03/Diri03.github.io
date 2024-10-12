<script>
    import Navigasi from "../../lib/Navigasi.svelte";
    let nama = '';
    let email = '';
    let nomorTelepon = '';
    let pesan = '';

    function handleSubmit(event) {
        event.preventDefault();
        nama = '';
        email = '';
        nomorTelepon = '';
        pesan = '';
    }
</script>

<Navigasi/>
<main>
    <div class="container">
        <h1>Kontak Saya</h1>
        <form on:submit={handleSubmit}>
            <label for="nama">Nama:</label>
            <input type="text" bind:value={nama} id="nama">
  
            <label for="email">Email:</label>
            <input type="text" bind:value={email} id="email">
  
            <label for="nomorTelepon">Nomor Telepon:</label>
            <input type="text" bind:value={nomorTelepon} id="nomorTelepon">
  
            <label for="pesan">Pesan:</label>
            <textarea bind:value={pesan} id="pesan"></textarea>
  
            <div class="tombol">
                <button type="submit">Kirim</button>
            </div>
        </form>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: white;
        width: 500px;
        height: 500px;
        padding: 50px;
        border-radius: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
    form input {
        height: 25px;
        margin-bottom: 20px;
        padding: 10px;
        box-sizing: border-box;
    }
    form textarea {
        margin-bottom: 40px;
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
    }

    .tombol {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        color: white;
        background-color: hsl(137, 100%, 36%);;
        width: 80%;
        height: 30px;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        .container {
            background-color: white;
            width: 300px;
            /* height: 300px; */
            padding: 20px;
            border-radius: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }

        h1 {
            font-size: 24px;
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 22px;
        }
    }
</style>