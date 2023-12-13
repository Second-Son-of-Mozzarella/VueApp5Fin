app.component('AddApiBook', {
    data(){
        return {
            newBook: new ApiBook(),


        }
    },
    props: {

        apiList: Array,

    },
    methods: {


    },

    template : `
      
      <div class="apiAddModel">
        <div class="flex-center" >
          <api-item v-for="(item, i) in apiList" :item="item" :key="item.id"  @add-api-item="addApiItem => $emit('add-api-item', addApiItem)"> </api-item>
        </div>
        
      </div>

      

    `
})