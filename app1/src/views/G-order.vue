<template>
    <div>
        <headers :left="'<'" :name="'订单列表'" :leftto="'foodList'">

        </headers>
        <bottoms :take="'foodList'" :order="'order'" :my="'login'" :search="'search'"></bottoms>
    </div>
</template>
<script>
import bottoms from '../components/bottom'
import headers from '../components/HelloWorld'
export default{
    components:{bottoms,headers}
}
</script>
<style scoped>

</style>