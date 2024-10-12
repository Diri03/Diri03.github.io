<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="navbar">
    <div class="container">
        <!-- Logo -->
        <div class="navbarleft">
            <button class="toggler" on:click={toggleMenu} aria-label="Toggle menu">
                <span class={isOpen ? 'isOpen' : ''}></span>
                <span class={isOpen ? 'isOpen' : ''}></span>
                <span class={isOpen ? 'isOpen' : ''}></span>
            </button>
            <div class="logo">
                <a href="/">DIRIANSYAH</a>
            </div>
        </div>

        <!-- Search Input -->
        <div class="search">
            <input type="text" placeholder="Search...">
        </div>
    </div>

    <!-- Menu biasa -->
    <div class="menu">
        <a href="/">Halaman Utama</a>
        <a href="/about">Tentang Saya</a>
        <a href="#project">Projek</a>
        <a href="/contact">Kontak</a>
    </div>

    <div class="mobile-menu" class:isOpen>
        {#if isOpen}
            <div class="mobile-link">
                <a href="/">Halaman Utama</a>
                <a href="/about">Tentang Saya</a>
                <a href="#project">Projek</a>
                <a href="/contact">Kontak</a>
            </div>
        {/if}
    </div>
</nav>

<style>
    :global(*){
        margin: 0;
        padding: 0;
    }

    .navbar {
        /* background-color: #333; */
        color: white;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 100%; */
        padding: 10px;
        background-color: white;
    }

    .navbarleft {
        display: flex;
    }

    .logo a {
        font-size: 24px;
        letter-spacing: 2px;
        color: hsl(137, 100%, 36%);
        text-decoration: none;
        font-weight: bold;
        margin-left: 10px;
    }

    .toggler {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        height: 24px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .toggler span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 3px 0;
        transition: all 0.3s ease-in-out;
    }

    .toggler span.isOpen:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .toggler span.isOpen:nth-child(2) {
        opacity: 0;
    }

    .toggler span.isOpen:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    .menu {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: hsl(137, 100%, 36%);
    }

    .menu a {
        padding: 10px;
        margin-left: 15px;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

    .menu a:hover {
        color: #ddd;
        background-color: hsl(137, 100%, 24%);
    }

    @media (max-width: 768px) {
        .container {
            background-color: hsl(137, 100%, 36%);
            width: 100vw;
        }

        .logo a {
            color: white;
        }

        .menu {
            display: none;
        }

        .toggler {
            display: flex;
        }

        .mobile-menu {
            display: block;
            /* background-color: black; */
        }

        .mobile-link {
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            width: 100%;
            gap: 10px;
        }

        .mobile-link a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            height: 40px;
            width: 100%;
            text-decoration: none;
            color: white;
            box-sizing: border-box;
        }

        .mobile-link a:hover {
            color: #ddd;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }

    @media (max-width: 480px) {
        .search {
            display: none;
        }
    }
</style>
