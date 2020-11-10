<template>
    <div class="p-3 m-3">
        <h1><b>O que é isso?</b></h1>
        <p class="align">Esse projeto foi desenvolvido para a disciplina de <i>Desenvolvimento de Plataformas Web</i> da <i>Universidade de Fortaleza - Unifor</i>. Eu me chamo <b>Uriel Anderson</b> e sou o humilde desenvolvedor deste site, baseado na <b>PokeAPI</b>, uma API Rest publica atualmente (Nov-2020) mantida por <i> Paul Hallet, Tim Malone, Alessandro Pezzé, Charles Marttinen e Sargun Vohra</i>.</p>

        <h1><b>O que posso fazer aqui?</b></h1>
        <p class="align">Atualmente este site é extremamente simples, contando com algumas funcionalidades básicas de uma pokedex. Atualmente possível:</p>

        <ul>
            <li>Pesquisar Pokemons por ID ou Nome.</li>
            <li>Procurar por pokemons usando a lista (<router-link to="/">Home</router-link>).</li>
            <li>Ver Alguns dados de pokemons, e suas formas (Masculino, Feminino e Shiny).</li>
        </ul>
    </div>
</template>

<style scoped>
.align{
    text-align: justify;
}
</style>

<script>
export default {
    name: 'About'
}
</script>