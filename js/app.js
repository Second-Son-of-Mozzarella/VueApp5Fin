
const Home = { template: ` 
<div class="home page">
        <q-page-container>



           <div class="container">
               
                    <div class="q-pa-md row items-start q-gutter-md flex-center">
                        <q-card class="my-card">
                              <q-card-section class="bg-primary text-white">
                                <div class="text-h6">Ad Historiam</div>
                                <div class="text-subtitle2">by Elijah Schultz</div>
                              </q-card-section>
                        
                              <q-separator />
                              
                               <q-card-section>
                                    About us: Lorum ipsum
                                    <br>
                                    How it Works: Lorum ipsum
                                </q-card-section>
                        
                              <q-card-actions align="around">
                                 <q-btn size="15px" class="top-card text-white" ><router-link to="/my-library">Go to Library</router-link></q-btn>
                                 <q-btn  size="15px" class="completed text-white" ><router-link to="/my-Archive">Go to Archive</router-link></q-btn>
                             </q-card-actions>
                        </q-card>
                    </div>
                     
           
  </div>
  
 
          
           


        </q-page-container>
        
        </div>
       
        ` }


const library = {

    data(){


        return {

            newApiBook: {
                id: 0,
                title: '',
                author: '',
            },


            rightDrawerOpen: false,

            prompt: false,

            leftDrawerOpen: true,

            apiBookList: new ApiBookShelf(),
            searchTerm: 'history',
            searching: true,


        }



    },

    props: {

    },

    methods: {

        addApiItem: function(apiBook){
            // add item to the list
            prompt = true;






        },


        searchBooks(){
            if(this.searchTerm){

                this.searching = true;

                let endpoint = 'https://www.googleapis.com/books/v1/volumes';
                let params = {
                    q: this.searchTerm,
                    filter: 'partial',
                    maxResults: 10
                }


                // execute ajax request using promises
                axios.get(endpoint, {

                    params,

                })
                    .then(response => {
                        console.log(response.data.items);

                        this.apiBookList.apiBooks = [];



                        response.data.items.forEach(item => {

                            console.log(item.volumeInfo.title + ' ' + item.volumeInfo.authors[0])

                            let tempApiBook = new ApiBook(item.volumeInfo.title, item.volumeInfo.authors.join(", "));
                            //
                            this.apiBookList.apiBooks.push(tempApiBook);

                            console.log(this.apiBookList.apiBooks)




                        })

                    })
                    .catch(error => {
                        console.error("Error retrieving books: ", error);
                    })


            }
        },
    },

    mounted: function (){
        this.searchBooks();
    },

    template: `
            <div class="home page">
              


              <q-drawer class="notScrollable" show-if-above v-model="rightDrawerOpen" side="right" class="bg-blue-grey-2 text-white" elevated>
             
                <add-book class="scrollable" id="addItemModal" @add-item="addIt => $emit('add-item', addIt)"></add-book>
                
              </q-drawer>

              <q-drawer class="notScrollable" show-if-above v-model="leftDrawerOpen" side="left" class="bg-blue-grey-2 text-white" elevated>

                <q-input color="primary" filled v-model="searchTerm" label="Search" @keyup="searchBooks()">
                  <template v-if="text" v-slot:append>
                    <q-icon name="cancel" @click.stop.prevent="text = null" class="cursor-pointer" />
                  </template>
                </q-input>

                <add-api-book :api-list="apiBookList.apiBooks" class="scrollable" id="addApiModal"></add-api-book>

                <q-dialog v-model="prompt" persistent>
                  <api-add-item> </api-add-item>
                </q-dialog>

              </q-drawer>

              <q-page-container>
                <q-bar class="bg-amber text-black searchBar flex justify-between">

            
                    <div>
                      <q-btn size="10px" class="top-card text-white q-mr-sm" ><router-link to="/">Go Home</router-link></q-btn>
                      <q-btn size="10px" class="top-card text-white" ><router-link to="/my-archive">Go to archive</router-link></q-btn>
                    </div>
                    <div>
                      <q-btn @click="rightDrawerOpen = !rightDrawerOpen" size="10px" class="top-card text-white q-mr-sm" >add Manual</q-btn>
                      <q-btn @click="leftDrawerOpen = !leftDrawerOpen; searchBooks()" size="10px" class="top-card text-white" >Google add</q-btn>
                    </div>
       

                  


                
                  

                </q-bar>



                <book-shelf :books="bookList" @delete-item="deleteItem => $emit('delete-item', deleteItem)" @add-to-rbs="book => $emit('add-to-rbs', book)">

                </book-shelf>


              </q-page-container>
              
              
            </div>
`}
const archive = {
    props: {
        rbs: Array,
    },

    template: `


<div class="home page">
              


              <q-page-container>
                <q-bar class="bg-amber text-black searchBar ">

                  <q-btn size="10px" class="top-card text-white" ><router-link to="/">Go Home</router-link></q-btn>
                  <q-btn size="10px" class="top-card text-white" ><router-link to="/my-library">Go to Library</router-link></q-btn>


                </q-bar>
               

                <arch-book-shelf :books="bookList">

                </arch-book-shelf>


              </q-page-container>
              
              
            </div>
`}


const routes = [
    { path: '/', component: Home },
    {
        path: '/my-library',
        component: library,
    },
    { path: '/my-archive', component: archive },
]


const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp({
    data(){



        return {



        };



    },

    methods: {









    }


})

app.use(router)

