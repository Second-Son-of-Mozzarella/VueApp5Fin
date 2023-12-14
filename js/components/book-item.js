app.component('BookItem', {
    data(){
        return {

        }
    },



    props: {
        book: Book,
    },

    // emits: ['delete-item','finished-book'],

    methods: {


        deleteIt: function () {

            db.collection(Book.collectionName).doc(this.book.id).delete();


        },

        addToArch: function () {

            console.log('test')

            db.collection(ArchBook.collectionName).add(this.book.toFirestore())
            db.collection(Book.collectionName).doc(this.book.id).delete();

        },


        setTitle: function (value) {
            db.collection(Book.collectionName).doc(this.book.id).update({
                title: value
            })
                .then(() => {
                    console.log("Document successfully updated!")
                })

        },

        setAuthor: function (value) {
            db.collection(Book.collectionName).doc(this.book.id).update({
                author: value
            })
                .then(() => {
                    console.log("Document successfully updated!")
                })

        },




        setLength: function (value) {
            db.collection(Book.collectionName).doc(this.book.id).update({
                length: value
            })
                .then(() => {
                    console.log("Document successfully updated to " + value)
                })

        },


        setLanguage: function (value) {
            db.collection(Book.collectionName).doc(this.book.id).update({
                language: value
            })
                .then(() => {
                    console.log("Document successfully updated!")
                })

        },


        setPagesRead: function (value) {
            db.collection(Book.collectionName).doc(this.book.id).update({
                pagesRead: value
            })
                .then(() => {
                    console.log("Document successfully updated!")
                })

        },





    },

    computed: {



    },

    mounted(){

    },


    template: `
      
      <q-card class="my-card book-card">

        
        
        
           <q-card-section :class="{'text-white' : true, 'top-card' : true, 'completed' : parseInt(book.length, 10) <= parseInt(book.pagesRead, 10)}" >

             <div class="row">
               <div class="col-10"> 
                 <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
                 {{book.title}}
                   <q-tooltip>
                     {{book.title}}
                   </q-tooltip>
                 <q-popup-edit v-model="book.title" auto-save v-slot="scope">
                   <q-input v-model="scope.value" dense autofocus counter @keyup="setTitle(scope.value)" />
                 </q-popup-edit>
               </div>
                 
                 


                 <div class="cursor-pointer ellipsis cardInfo">
                   By {{book.author}}
                   <q-tooltip>
                     {{book.author}}
                   </q-tooltip>
                   <q-popup-edit v-model="book.author" auto-save v-slot="scope">
                     <q-input v-model="scope.value" dense autofocus counter @keyup="setAuthor(scope.value)" />
                   </q-popup-edit>
                 </div>
             </div>
               <div class="col-2">
                 <q-circular-progress
                     v-if="parseInt(book.length, 10) >= parseInt(book.pagesRead, 10)"
                     show-value
                     :value="Math.round((book.pagesRead / book.length) * 100)"
                     size="40px"
                     :thickness="0.2"
                     color="green-5"
                     center-color="grey-9"
                     track-color="transparent"
                     class="q-ml-md q-mr-lg"
                 >
                   {{Math.round((book.pagesRead / book.length) * 100)}}%
                 </q-circular-progress>

                
                 

               </div>
             </div>

            


             
           </q-card-section>
        
        <br>

            <q-card-section class="q-pt-none">
              <div class="cursor-pointer ellipsis cardInfo">
                Length: {{book.length}} Pages
                <q-popup-edit v-model="book.length" auto-save v-slot="scope">
                  <q-input v-model.number="scope.value" dense autofocus counter @keyup="setLength(scope.value)" />
                </q-popup-edit>
              </div>
             
              <div class="cursor-pointer ellipsis cardInfo">
                Language: {{book.language}}
                <q-popup-edit v-model="book.language" auto-save v-slot="scope">
                  <q-input v-model="scope.value" dense autofocus counter @keyup="setLanguage(scope.set)" />
                </q-popup-edit>
              </div>
       
              <div class="ellipsis">
                Time Period: {{book.timePeriod}}
              </div>
            
              <div class="ellipsis">
                Type: {{book.type}}
              </div>
              
              <div class="cursor-pointer ellipsis cardInfo">
                Pages Read: {{book.pagesRead}} Pages
                <q-popup-edit v-model="book.pagesRead" auto-save v-slot="scope">
                  <q-input v-model.number="scope.set" dense autofocus counter @keyup="setPagesRead(scope.set)" />
                </q-popup-edit>
              </div>
              
              
            </q-card-section>
        

        <q-card-actions align="around">
          

            <q-btn size="10px"  @click="addToArch" class="completed text-white" >Archive</q-btn>

            <q-btn  size="10px" @click.prevent="deleteIt" class="top-card text-white" >delete</q-btn>

          
          
        </q-card-actions>
    </q-card>
    `
})