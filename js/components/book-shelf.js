app.component('BookShelf', {
    data(){
        return {
            //filteredSongs: this.songs,
            filterKeyword: '',

            books: [],

            loading: true,

        }
    },

    created() {

        let bookRef;

        bookRef = db.collection(Book.collectionName).orderBy('title').withConverter(Book)


        // ToDo: fix executing
        bookRef.onSnapshot(snapshot => {
            this.books = [];
            snapshot.forEach(docRef => {
                this.books.push(docRef.data());

                this.loading = false;
            })

        })

    },




    methods: {

        addIt: function(){

            db.collection(Book.collectionName).add(this.newBook.toFirestore()).then(docRef => {
                this.newBook = new Book();
            })



        },




    },

    computed: {


    },


    template: `
        <div class="bookShelf">
            <div class="row justify-between">
            </div>
            <q-list >
              <div class="q-pa-md row items-start q-gutter-md flex-center">
                <book-item v-for="item in books" :book="item" :key="item.id" @delete-item="deleteItem => $emit('delete-item', deleteItem)"  @add-to-rbs="book => $emit('add-to-rbs', book)"> </book-item>
                <q-card v-if="loading" class="book-card">
                  <q-item>

                    <q-item-section>
                      <q-item-label>
                        <q-skeleton type="text" />
                      </q-item-label>
                      <q-item-label caption>
                        <q-skeleton type="text" />
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-skeleton height="170px" square />

                  <q-card-actions align="around" class="q-gutter-md">
                    <q-skeleton  type="QBtn" />
                    <q-skeleton  type="QBtn" />
                  </q-card-actions>
                </q-card>
              </div>
            </q-list>
        </div>
            
    `
})
