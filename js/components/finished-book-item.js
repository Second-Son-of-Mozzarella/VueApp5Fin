app.component('BookItem', {
    data(){
        return {

        }
    },



    props: {
        book: Book,
    },

    emits: ['delete-item','finished-book'],

    methods: {


        archive: function () {
            this.$emit('archived-book', this.book);
        },

    },

    computed: {



    },

    mounted(){

    },


    template: `
      
      <q-card class="my-card">

        
        
        
           <q-card-section :class="{'text-white' : true,'favorite': book.favourite, 'top-card' : true}" >

            
                 <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
                 {{book.title}}
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
               <q-btn @click.prevent="archive" class="top-card text-white" >Remove from Archive</q-btn>
          
        </q-card-actions>
    </q-card>
    `
})