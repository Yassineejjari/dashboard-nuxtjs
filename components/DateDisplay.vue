<template>
    <div id="date">
        <div class="dateAujourdhui">{{ today }}</div>
    </div>
</template>
<script setup>

const { today } = useCurrentDateTime()
</script>
<style lang="scss">
#date{

display: flex;
font-size: 34px;
font-family: 'courier new', courier, monospace;
font-weight: bold;
}
.dateAujourdhui{
color:whitesmoke;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
font-size:40px ;
gap: 15px;
@media screen and (min-width: 1200px) {
    font-size: 50px;
}
}

</style>