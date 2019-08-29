<template>
    <div>
       <headers></headers>
    </div>
</template>
<script>
import headers from '../components/HelloWorld'
export default{
    data(){
        return {
            da1: '',
		    da2: '',
        }
    },
    components:{headers},
    created(){
        this.gain()
    },
    methods:{
        gain() {
				// this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
                //     var dat = data.data;
                //     console.log(data)
				// 	this.da1 = dat.splice(0, 8);

				// })
				// this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
				// 	var dat = data.data;
				// 	this.da2 = dat.splice(8, 16);

				// })
			}
    }
}
</script>
<style>

</style>