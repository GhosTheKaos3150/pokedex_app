<template>
    <div class="starter-template">
      <h1>POKEDEX</h1>

      <nav aria-label="Paginacao topo">
        <ul class="pagination">
          <li v-if='offset !== 0' class="page-item"><a class="page-link" v-on:click.prevent='prev_offset' href="#">Previous</a></li>
          <li v-else class="page-item disabled"><a class="page-link" tabindex="-1" v-on:click.prevent='prev_offset' href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" v-on:click.prevent='next_offset' href="#">Next</a></li>
        </ul>
      </nav>
      
      <table class="table table-hover" v-if="hasPokemon">
        <thead class="table-header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Altura</th>
            <th scope="col">XP Base</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in ordPokemons" :key="pokemon.id">
            <th scope="row">{{pokemon.id}}</th>
            <td>{{pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}}</td>
            <td>{{pokemon.height}}</td>
            <td>{{pokemon.base_experience}}</td>
            <td><button v-on:click="route_to(pokemon.id)">Visualizar</button></td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Paginacao topo">
        <ul class="pagination">
          <li v-if='offset !== 0' class="page-item"><a class="page-link" v-on:click.prevent='prev_offset' href="#">Previous</a></li>
          <li v-else class="page-item disabled"><a class="page-link" tabindex="-1" v-on:click.prevent='prev_offset' href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" v-on:click.prevent='next_offset' href="#">Next</a></li>
        </ul>
      </nav>
    </div>
</template>

<style scoped>

.table-header{
  background-color: crimson;
  color: white;
}

</style>

<script>
export default {
    name: 'Home',
    data() {
      return{
        pokemons: [],
        ordPokemons: [],
        offset: 0,
        limit: 20
      }
    },
    methods: {
      prev_offset(){
        if(this.offset !== 0){
          this.offset -= 20;
          this.fetch_pokemon();
        } else {
          this.offset = 0;
          this.fetch_pokemon();
        }

      },
      next_offset(){
        this.offset += 20;
        this.fetch_pokemon();
      },
      route_to(id){
        this.$router.push({ name: 'Pokemon',  params: { id }})
      },
      fetch_pokemon(){

        this.pokemons = [];
        this.ordPokemons = [];

        fetch('https://pokeapi.co/api/v2/pokemon?offset='+this.offset+'&limit='+this.limit)
        .then(async(response)=>{
          return response.json() 
        })
        .then((json)=>{
          json.results.forEach((poke) => {
            fetch(poke.url)
            .then((response)=>{
              return response.json()
            })
            .then((json)=>{
              this.pokemons.push(json)
              console.log(json)
            })
            
            this.ordPokemons = this.pokemons.sort(function(a,b){ 
                if (a.id > b.id) {
                  return a-b;
                }
                if (a.id < b.id) {
                  return b-a;
                }

                return a-b;
             })
          });
        })
      }
    },
    computed:{
      hasPokemon(){
        return this.pokemons.length > 0 ? true : false
      }
    },
    mounted(){
      fetch('https://pokeapi.co/api/v2/pokemon?offset=$(this.offset)&limit=$(this.limit)')
        .then(async(response)=>{
          return response.json() 
        })
        .then((json)=>{
          json.results.forEach((poke) => {
            fetch(poke.url)
            .then((response)=>{
              return response.json()
            })
            .then((json)=>{
              this.pokemons.push(json)
              console.log(json)
            })
            
            this.ordPokemons = this.pokemons.sort(function(a,b){ 
                if (a.id > b.id) {
                  return a-b;
                }
                if (a.id < b.id) {
                  return b-a;
                }

                return a-b;
             })
          });
        })
    
    }
}
</script>