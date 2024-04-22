<script setup>
    import{ref,reactive} from 'vue'

    const title = ref'Hello World'

    const size = reactive({
        width = '500px'
        height = '100px'

    })

</script>


<template>
    <div : style ='size'>
        {{title}}
    </div>
</template>