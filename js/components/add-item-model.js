app.component('AddBook', {
    data(){
        return {
            newBook: new Book(),

            timePeriod: [
                'Any Era', 'Late Classical Era', 'Early Medieval Era', 'High Medieval Era', 'Late Medieval Era', 'Renaissance Era','Enlightenment Era','Revolutionary Era','Early Industrial Era','Colonial Era','First World War','Inter-War Period','Second World War','Cold War','1991 - Now'
            ],

            types: [
                'Biography','War History','Architecture','Theology','Primary Accounts','Social History'
            ],
        }
    },
    props: {

    },
    emits: ['add-item'],
    methods: {

            addIt: function(){

                db.collection(Book.collectionName).add(this.newBook.toFirestore()).then(docRef => {
                    this.newBook = new Book();
                })

                // this.$emit('add-item', this.newBook);
                //
                //
                // // clear the form
                // this.newBook = {
                //     id: Math.floor(Math.random() * 9999999),
                //     title: '',
                //     author: '',
                //     length: 0,
                //     language: '',
                //     timePeriod: '',
                //     type: '',
                //     pagesRead: 0,
                //     favourite: false,
                // };



            },
        },

    template : `
      
      <div class="addBookForm flex-center" >
      
      <q-form
          v-on:submit="addIt"
          @reset="onReset"
          class="q-gutter-md  dark">

        <q-input
            filled
            class="dark"
            v-model="newBook.title"
            label="Book Name"
            hint="Name of a book"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type the name of a Book']"
        />

        <q-input
            filled
            v-model="newBook.author"
            label="Book author"
            hint="Name of the author"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type the name of an author']"
        />

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

        <q-select v-model="newBook.timePeriod" :options="timePeriod" label="Time Period" />

        <q-select v-model="newBook.type" :options="types" label="Type" />

        <q-input
            filled
            type="number"
            v-model="newBook.pagesRead"
            label="Number of Pages Read"
        />


        <q-btn
            @click.prevent="addIt"
            type="submit"
            :loading="submitting"
            label="Add this Book to Shelf"
            class="q-mt-md text-black"
            color="amber-14"
        >
        </q-btn>
        
      </q-form>
      </div>

    `
})