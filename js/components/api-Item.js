app.component('ApiItem', {



    props: {
        item: {
            type: ApiBook,
            required: true,
        }
    },

    // emits: ['delete-item','finished-book'],

    methods: {
        addApiItem: function () {
            this.$emit('add-item', this.item);
        }



    },

    computed: {



    },

    mounted(){

    },


    template: `


      <q-card class="my-card api-card q-mt-md q-mb-md">




        <q-card-section :class="{'text-white' : true, 'top-card' : true}" >


              <div class="cursor-pointer text-h6 text-weight-bold ellipsis cardInfo">
                {{item.title}}
                <q-tooltip>
                  {{item.title}}
                </q-tooltip>

              </div>

          
              <div class="cursor-pointer ellipsis cardInfo">
                By {{item.author}}

                <q-tooltip>
                  {{item.author}}
                </q-tooltip>
              </div>






        </q-card-section>


        <q-card-actions align="around">

          
          <q-btn  size="15px"  class="top-card text-white"  @click.prevent="addApiItem">ADD</q-btn>



        </q-card-actions>
      </q-card>
      
      
      
    `
})