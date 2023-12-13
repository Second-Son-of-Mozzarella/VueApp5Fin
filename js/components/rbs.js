app.component('ArchBookShelf', {
    data(){
        return {
            //filteredSongs: this.songs,
            filterKeyword: '',

            archBooks: [],

            loading: true,

        }
    },

    created() {

        let bookRef;

        bookRef = db.collection(ArchBook.collectionName).orderBy('title').withConverter(ArchBook)


        // ToDo: fix executing
        bookRef.onSnapshot(snapshot => {
            this.archBooks = [];
            snapshot.forEach(docRef => {
                this.archBooks.push(docRef.data());
            })


            this.loading = false;

        })



    },




    methods: {






    },

    computed: {


    },


    template: `
        <div class="bookShelf">
            <div class="row justify-between">
            </div>
            <q-list >
              <div class="q-pa-md row items-start q-gutter-md flex-center">
                <archived-book-item v-for="item in archBooks" :book="item" :key="item.id"  > </archived-book-item>

                <q-card  v-if="loading" class="book-card">
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

                  <q-skeleton height="180px" square />

                  <q-card-actions align="around" class="q-gutter-md">
                    <q-skeleton type="QBtn" />
                  </q-card-actions>
                </q-card>
              </div>
            </q-list>
        </div>
            
    `
})
