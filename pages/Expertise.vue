<template>
    <h1 class="titreexpertise">Expertise</h1>
    <div class="container">
        
    
            <Count 
                title="Total"
                :chiffre="metrics?.total"
                
            />
            
            
            <Count 
                title="Acceptées"
                :chiffre="metrics?.accepted" 
            
            />
        
    
        
                <Count 
                    title="Refusées"
                    :chiffre="metrics?.rejected"
                 />
                <Count 
                    title="En attente"
                    :chiffre="metrics?.pending" />
    </div>
    <div class="containerdeux">
            <CountExpertises
                title="Vélos"
                total-titre="Total:"
                :total="metrics?.bikes.total"
                sous-titre="Acceptées"
                sous-titre2="Refusées"
                :percentage-total="pctBikes"
                :chiffre-accepte="metrics?.bikes.accepted" 
                :chiffre-refuse="metrics?.bikes.rejected" />
            <CountExpertises
              title="Composants"
              total-titre="Total:"
              :total="metrics?.components.total"
              sous-titre="Acceptées"
              sous-titre2="Refusées"
              :percentage-total="pctComponents"
              :chiffre-accepte="metrics?.components.accepted"
              :chiffre-refuse="metrics?.components.rejected"  />
    </div>               
        
        
              
                
        
    

    <Lastdata
    :lastData="lastData"
    />
    <ActualiserDonnees
    :attente="attente"
    />
    <ErrorCount
    :errorCount="errorCount"
    />


</template>
<script setup>


const { data: metrics, pctBikes, pctComponents, lastData } = useLazyFetch('https://atelier.cycleurope.fr/api/v5/metrics/support/expertises', {
    transform: (_data) => _data
}) 
 
</script>
<style scoped lang="scss">
.titreexpertise{
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: azure;
}
.container{
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
width: 100%;
padding: 25px 25px 25px 25px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px; 
}
}
.containerdeux{
display: grid;
grid-template-columns:  1fr 1fr;
gap: 20px;
padding: 25px 25px 25px 25px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
display:grid;
grid-template-columns:  1fr 1fr;
gap: 20px; 

}
}



.container_groupe{
display: grid;
grid-template-columns: 1fr ;
gap: 20px;
border-radius: 13px;
background-color: aqua;
//padding: 50px;
width: 100%;
@media screen and (min-width: 1200px){
.container_groupe{
display: grid;
grid-template-columns: 1fr 1fr  ;
gap: 20px;
border-radius: 13px;
}
}
}


.cadreheuredate {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
box-sizing: border-box;
padding-top: 50px;
justify-content: space-between;
}


</style>