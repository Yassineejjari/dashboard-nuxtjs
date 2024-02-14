<template>
    
        <h1 class="demande">Demande de garanties</h1>
    
    <div>
        <div class="container">
            <div class="container_groupe">
        
                <Count 
                    title="Aujourd'hui"
                    :chiffre="metrics?.sentToday"
                    :valeurRef="metrics?.sentYesterdayAtSameTime"
                />
                
                
                <Count 
                    title="Hier"
                    :chiffre="metrics?.sentYesterday" 
                
                />
            </div>
        
            <div class="container_groupe">
                    <Count 
                        title="Cette semaine"
                        :chiffre="metrics?.sentThisWeek"
                        :valeurRef="metrics?.sentLastWeekAtSameTime" />
                    <Count 
                        title="Semaine dernière"
                        :chiffre="metrics?.sentLastWeek" />
            </div>
            <div class="container_groupe">    
                    <Count 
                        title="Ce mois"
                        :chiffre="metrics?.sentThisMonth" 
                        :valeurRef="metrics?.sentLastMonthAtSameTime"/>
                    <Count 
                        title="Mois dernier"
                        :chiffre="metrics?.sentLastMonth" />
            </div>
            <div class="container_groupe">
                    <Count 
                        title="Cette année"
                        :chiffre="metrics?.sentThisYear"
                        :valeurRef="metrics?.sentLastYearAtSameTime" />
                    <Count 
                        title="Année dernière"
                        :chiffre="metrics?.sentLastYear" />
            </div>
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
    </div> 


       
</template>

<script setup>
useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'Home page description'
        }
    ]
})
const { data: metrics, pending, refresh } = useLazyFetch('https://atelier.cycleurope.fr/api/v5/metrics/support/tickets', {
    transform: (_data) => _data.data
}) 
</script>
<style scoped lang="scss">
.demande{
    color: whitesmoke;
   
}
.container{
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
width: 100%;
padding: 50px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
 display:grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 20px; 
}
}



.container_groupe{
display: grid;
grid-template-columns: 1fr ;
gap: 20px;
border-radius: 13px;
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

.donne-attente {
color: whitesmoke;
position: fixed;
z-index: 1000;
bottom: 0;
}
</style>