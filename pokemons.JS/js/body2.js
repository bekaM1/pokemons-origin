var elPokeList = document.querySelector('.js-poke-list');
const NewFragment = document.createDocumentFragment()

var elPokeTemp = document.querySelector('.js-poke-template').content;
const elBody2 = document.querySelector('.index-next-body')


const elModal = document.querySelector('.modal') 
const elModalImage = document.querySelector('.js-modal-image')
const elModalTitle = document.querySelector('.js-modal-title')
const elModalWeaknesses = document.querySelector('.pokemons-weaknesses')
const elModalEgg = document.querySelector('.js-modal-egg')
const elModalTime = document.querySelector('.js-modal-spawn_time')
const elModalEvolution = document.querySelector('.js-modal-next_evolution')


function pokemonsModal(_pokemon){
    elModalImage.src = _pokemon.img
    elModalTitle.textContent = _pokemon.name
    elModalWeaknesses.textContent ='weaknesse: ' + _pokemon.weaknesses
    elModalEgg.textContent ='egg: ' + _pokemon.egg
    elModalTime.textContent ='spawn-time: '+ _pokemon.spawn_time
    elModalEvolution.textContent = 'multipliers: '+ _pokemon.multipliers
}

elPokeList.addEventListener('click', (evt) => {
    // console.log(poke.target.dataset.id);
    const btnId = evt.target.dataset.id
    if(evt.target.matches('.js-pokemons-button')){
        const findPokemon = pokemons.find((item) => item.id == btnId)
        pokemonsModal(findPokemon)
    }
})




function renderPokemons(_poke){
    elPokeList.innerHTML = null

    _poke.forEach((poke) => {
        const clonePokemonsTemplate = elPokeTemp.cloneNode(true)
        clonePokemonsTemplate.querySelector ('.js-pokemons-item')
        clonePokemonsTemplate.querySelector ('.js-pokemons-image').src = poke.img
        clonePokemonsTemplate.querySelector ('.js-pokemons-title').textContent = poke.name
        clonePokemonsTemplate.querySelector ('.js-pokemon-type').textContent = poke.type
        clonePokemonsTemplate.querySelector ('.js-pokemons-weight').textContent = poke.weight            
        clonePokemonsTemplate.querySelector ('.js-pokemons-heigth').textContent = poke.height
        clonePokemonsTemplate.querySelector ('.js-pokemons-button').dataset.id = poke.id
        NewFragment.appendChild(clonePokemonsTemplate)
    });
    elPokeList.appendChild(NewFragment)
}

renderPokemons(pokemons.slice(11,21))