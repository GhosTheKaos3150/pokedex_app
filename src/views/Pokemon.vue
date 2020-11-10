<template>
    <div>
        <nav aria-label="Paginacao">
            <ul class="pagination">
                <li class="page-item"><router-link class="page-link" to="/">Home</router-link></li>
            </ul>
        </nav> 
        <div class="align-middle screen p-3">
            <div class="media p-5 m-5" v-if="pokemon != null">
                <table class="flex-fill align-self-center">
                    <tr>
                        <td class="p-3" colspan="2"><h1>QUEM É ESSE POKEMON?</h1></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="m-2 p-3 box-content">
                                <img v-bind:src="pokemon.sprites.front_default" alt="Sprite do Pokemon" width="100">
                                <h5>Modelo Macho</h5>
                            </div>
                        </td>
                        <td v-if="pokemon.sprites.front_female != null" rowspan="3">
                            <div class="m-3 p-5 box-content screen-content">
                                <h3> {{ pokemon.name[0].toUpperCase()+pokemon.name.slice(1) }}</h3>
                                <h5> ID: {{ pokemon.id }} </h5>
                                <h5> Experiência Base: {{ pokemon.base_experience }} </h5>
                                <h5> Peso: {{ pokemon.weight }} </h5>
                                <h5> Altura: {{ pokemon.height }} </h5>
                                <h5><b>Tipos:</b></h5>
                                <div v-for="type in pokemon.types" :key="type">
                                    <h5>Tipo {{ type.type.name[0].toUpperCase()+type.type.name.slice(1) }}</h5>
                                </div>
                            </div>
                        </td>
                        <td v-else rowspan="2">
                            <div class="p-5 m-3 box-content screen-content">
                                <h3> {{ pokemon.name[0].toUpperCase()+pokemon.name.slice(1) }}</h3>
                                <h5> ID: {{ pokemon.id }} </h5>
                                <h5> Experiência Base: {{ pokemon.base_experience }} </h5>
                                <h5> Peso: {{ pokemon.weight }} </h5>
                                <h5> Altura: {{ pokemon.height }} </h5>
                                <h5><b>Tipos:</b></h5>
                                <div v-for="type in pokemon.types" :key="type">
                                    <h5>Tipo {{ type.type.name[0].toUpperCase()+type.type.name.slice(1) }}</h5>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="pokemon.sprites.front_female != null">
                        <td>
                            <div class="m-2 p-3 box-content">
                                <img v-bind:src="pokemon.sprites.front_female" alt="Sprite do Pokemon" width="100">
                                <h5>Modelo Femea</h5>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="m-2 p-3 box-content">
                                <img v-bind:src="pokemon.sprites.front_shiny" alt="Sprite do Pokemon" width="100">
                                <h5>Modelo Shiny</h5>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="m-2 p-5 box-content screen-content">
                                <h3>Aparece Em:</h3>
                                <ul v-for="games in pokemon.game_indices" :key="games">
                                    <li>Pokemon {{games.version.name[0].toUpperCase()+games.version.name.slice(1)}}</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div v-else>
                <h1>Pokemon Não Encontrado :(</h1>
                <router-link style="color: white;" to="/">Voltar á pagina Inicial</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

.box-content{
    border-style: 5px solid black;
    border-radius: 16px;
    background-color:white;
    color: black;
}

.screen-content{
    text-align: left;
}

.screen{
    border-style: 5px solid black;
    border-radius: 16px;
    background-color: crimson;
    color: white;
    text-align: center;
}

</style>

<script>
export default {
    name: 'Pokemon',
    data() {
        return{
            id: this.$route.params.id,
            pokemon: undefined,
        }
    },
    route_to(id){
        this.$router.push({ name: 'Pokemon',  params: { id }})
    },
    mounted() {
        fetch('https://pokeapi.co/api/v2/pokemon/'+this.id)
        .then(async(response)=>{
            console.log(response)
            return response.json()
        })
        .then((json)=>{
            this.pokemon = json
        })
    }
}
</script>