<script>
    import { compile } from "svelte/compiler";
import Navigasi from "../../lib/Navigasi.svelte";

    let todos = [];
    let newTodo = '';
    function addTodo(){
        if (newTodo){
            todos = [...todos, {text: newTodo, completed: false}];
            newTodo = '';
        }
    };

    const toggleTodo = (index) => {
        todos[index].completed = !todos[index].completed;
    };

    const deleteTodo = (index) => {
        todos =todos.filter((_, i) => i !== index);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            addTodo();
        }
    }
</script>

<Navigasi/>
<main>
    <h1>Daftar List</h1>
    <div class="addTask">
        <input type="text" bind:value={newTodo} placeholder="Tambahkan Daftar List" on:keydown={handleKeyDown}>
        <button on:click={addTodo}>Tambah</button>
    </div>
    <div class="container">
        {#each todos as todo, index}
            <div class="listTask">
                <div class="kiri" style="text-decoration: {todo.completed ? 'line-through' : 'none'}">
                    <input type="checkbox" bind:checked={todo.completed} on:click={() => toggleTodo(index)}>
                    {todo.text}
                </div>
                <button on:click={() => deleteTodo(index)}>Hapus</button>
            </div>
        {/each}
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

    .addTask {
        background-color:white;
        border-radius: 20px;        
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .addTask input {
        width: 50%;
        height: 40px;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
    }

    .addTask button {
        background-color: hsl(137, 100%, 36%);
        color: white;
        height: 40px;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
    }
    
    .listTask {
        background-color: white;
        width: 48%;
        height: 40px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content:space-between;
    }

    .listTask button {
        background-color: hsl(137, 100%, 36%);
        color: white;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .listTask {
            width: 100%;
        }
    }
</style>