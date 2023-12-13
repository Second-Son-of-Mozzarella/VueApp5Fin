app.component('ArchivedBookItem', {
    data(){
        return {

        }
    },



    props: {
        book: ArchBook,
    },

    // emits: ['delete-item','finished-book'],

    methods: {


        addToLibrary: function () {

            console.log('test')

            db.collection(Book.collectionName).add(this.book.toFirestore())
            db.collection(ArchBook.collectionName).doc(this.book.id).delete();

        }


    },

    computed: {



    },

    mounted(){

    },


    template: `
      
      <q-card class="my-card book-card">

        
        
        
           <q-card-section :class="{'text-white' : true, 'completed' : true}" >


                 <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
                 {{book.title}}
                   <q-tooltip>
                     {{book.title}}
                   </q-tooltip>

               </div>
                 
                 


                 <div class="cursor-pointer ellipsis cardInfo">
                   By {{book.author}}

                 </div>

            


             
           </q-card-section>
        
        <br>

            <q-card-section class="q-pt-none">
              <div class="cursor-pointer ellipsis cardInfo">
                Length: {{book.length}} Pages

              </div>
             
              <div class="cursor-pointer ellipsis cardInfo">
                Language: {{book.language}}

              </div>
       
              <div class="cursor-pointer ellipsis cardInfo">
                Time Period: {{book.timePeriod}}

              </div>
            
              <div class="cursor-pointer ellipsis cardInfo">
                Type: {{book.type}}

              </div>
              
              
              
            </q-card-section>
        

        <q-card-actions align="around">
          

            <q-btn size="10px"  @click="addToLibrary" class="completed text-white" >Send to Library</q-btn>

          
          
        </q-card-actions>
    </q-card>
    `
})