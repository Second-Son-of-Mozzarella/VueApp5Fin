app.component('ApiItem', {
    data(){
        return {
            newBook: new Book(),

            timePeriod: [
                'Any Era', 'Late Classical Era', 'Early Medieval Era', 'High Medieval Era', 'Late Medieval Era', 'Renaissance Era','Enlightenment Era','Revolutionary Era','Early Industrial Era','Colonial Era','First World War','Inter-War Period','Second World War','Cold War','1991 - Now'
            ],

            types: [
                'Biography','War History','Architecture','Theology','Primary Accounts','Social History'
            ],

            visible: false,
        }
    },

    props: {
        item: {
            type: ApiBook,
            required: true,
        }
    },

    // emits: ['delete-item','finished-book'],

    methods: {


        addIt: function(item) {



            this.newBook.title = item.title;
            this.newBook.author = item.author;


            db.collection(Book.collectionName).add(this.newBook.toFirestore()).then(docRef => {
                this.newBook = new Book();
            })

        }


    },

    computed: {



    },

    mounted(){

    },


    template: `


      <q-card class="my-card api-card q-mt-md q-mb-md">


        <q-card-section :class="{'text-white' : true, 'top-card' : true}">


          <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
            {{ item.title }}
            <q-tooltip>
              {{ item.title }}
            </q-tooltip>

          </div>


          <div class="cursor-pointer ellipsis cardInfo">
            By {{ item.author }}

            <q-tooltip>
              {{ item.author }}
            </q-tooltip>
          </div>

          <q-btn
              size="10px"
              @click="visible = !visible"
              label="add form"
              class="q-mt-md text-black"
              color="amber-14"
          >
          </q-btn>


        </q-card-section>


        <q-card-section v-if="visible">


          <q-form
              v-on:submit="addIt(item)"
              @reset="onReset"
              class="q-gutter-md  dark">

          

            <q-input
                filled
                type="number"
                v-model="newBook.length"
                label="Number of Paged"
            />

            <q-input
                filled
                v-model="newBook.language"
                label="Language"
                hint="language which the book was written"
            />

            <q-select v-model="newBook.timePeriod" :options="timePeriod" label="Time Period"/>

            <q-select v-model="newBook.type" :options="types" label="Type"/>

            <q-input
                filled
                type="number"
                v-model="newBook.pagesRead"
                label="Number of Pages Read"
            />


            <q-btn

                type="submit"
                :loading="submitting"
                label="Add this Book to Shelf"
                class="q-mt-md text-black"
                color="amber-14"
            >
            </q-btn>


          </q-form>


        </q-card-section>


      </q-card>



    `
})