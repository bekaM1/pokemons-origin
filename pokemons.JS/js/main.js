var elPokeList = document.querySelector('.js-poke-list');
const NewFragment = document.createDocumentFragment()

var elPokeTemp = document.querySelector('.js-poke-template').content;
const elBody2 = document.querySelector('.index-next-body')

var elSearchSelect = document.querySelector('.js-selector')
var elSortPokemons = document.querySelector('.select_type')


//  Modal start


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

// Modal end)
// Search types start

const types = []
function GenerateTypes (){
    pokemons.forEach((poke) => {
        poke.type.forEach((typ) => {
            if(types.includes(typ)){
                types.push(typ)
            }
        })
    })
    types.sort()
}
GenerateTypes();

function RenderTypes(_type) {
    _type.forEach((typ) => {
        const newOption = document.createElement('option')
        newOption.value = typ
        newOption.textContent = typ
        elSearchSelect.appendChild(newOption)
    })
}
RenderTypes(types)

function showSearchResults(regexp) {
    const filteredPokemons = pokemons.filter(
      (poke) =>
        poke.Title.match(regexp) && 
        (elSearchSelect.value === "all" || 
        poke.type.includes(elSearchSelect.value)) 
    );
    return filteredPokemons 
  }

function sortedPokemons(pokemons,sortType) {
    if (sortType === 'a-z') {
        pokemons.sort((a,b) =>{
            if (a.name > b.name) {
                return 1
            }else if (b.name > a.name) {
                return -1
            }else {
                return 0
            }
        })
    }
    if (sortType === 'z-a') {
        pokemons.sort((a,b) =>{
            if (a.name < b.name) {
                return 1
            }else if (b.name < a.name) {
                return -1
            }else {
                return 0
            }
        })
    }


    if (sortType === "weight-smallest"){
        movies.sort((a,b) => {
            return b.weight - a.weight
        })
    }
    if (sortType === "weight-biggest"){
        movies.sort((a,b) => {
            return b.weight - a.weight
        })
    }
    if (sortType === "candy_count-biggest"){
        movies.sort((a,b) => {
            return a.candy_count - b.candy_count
        })
    }
    if (sortType === "candy_count-lowest"){
        movies.sort((a,b) => {
            return a.candy_count - b.candy_count
        })
    }
}




// Search types end :)



// Search start
const elSearchForm = document.querySelector('.js-search-form')
const elSearchInput = document.querySelector('.js-search')



elSearchForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const elSearchValue = elSearchInput.value.trim()
    const Searchquery = new RegExp(elSearchValue, 'gi')

    const SearchPokemons = pokemons.filter((poke) => poke.name.match(Searchquery))
    sortedPokemons(SearchPokemons,elSortPokemons.value)

    if(SearchPokemons.length > 0){
        renderPokemons(SearchPokemons)
    }else {
        elPokeList.innerHTML = '<div class="text-white display-3" >Pokemon Is Not Found</div>'
    }

})

// Search end )


// Templay-copy start




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


// Templay-end

renderPokemons(pokemons.slice(0,10))

