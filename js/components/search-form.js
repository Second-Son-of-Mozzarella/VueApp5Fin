app.component('SearchBar', {
    data(){
        return {
            //filteredSongs: this.songs,
            filterKeyword: '',
        }
    },

    props: {
        books: Array,
    },

    methods: {

        filter(keyword){
            this.filterKeyword = keyword;
        },
    },

    computed: {


    },


    template: `
       <q-bar class="bg-amber text-black searchBar">

         Search 


       </q-bar>
            
    `
})
