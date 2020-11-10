<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top p-header">
      <a class="navbar-brand" href="#"><img src="/public/pokedex-logo.png" alt="Pokedex Logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/about">Sobre</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" v-on:submit = "onSubmitForm" name="pokemonForm">
          <input class="form-control mr-sm-2" type="text" placeholder="Nome ou Id" name="id" aria-label="Search">
          <input class="btn btn-secondary my-2 my-sm-0 p-button" type="submit" value="Procurar">
        </form>
      </div>
    </nav>
</template>

<style scoped>

.p-button{
    background-color: brown;
    color: white;
}

.p-header{
    background-color: crimson;
    color: white;
}

</style>

<script>
export default {
    name: 'Navbar',
    data(){
      return{
        id: 0
      }
    },
    methods: {
      onSubmitForm() {
        this.id = document.forms['pokemonForm']['id'].value;

        if (typeof(this.id)==='string'){
          this.id = this.id.toLowerCase()
        }

        var id = this.id;

        this.$router.push({ name: 'Pokemon',  params: { id }})
      }
    }
}
</script>