<template>
     <div id="horloge">
        <div class="heure"> {{hour}} </div>
        <div class="points">:</div>
        <div class="Minutes"> {{ minute }} </div>
        <div class="points"><span v-show="pointsVisible">:</span></div>
        <div class="secondes"> {{second}} </div>
    </div>
</template>
<script setup>
const {hour, minute, second} = useCurrentDateTime()


</script>


<style lang="scss">
$fontsize:45px;

.points{

width: 30px;
display: block;


}
#horloge{
display: flex;
font-size: 45px;
font-family: 'courier new', courier, monospace;
font-weight: bold;
color: red;
}


</style>