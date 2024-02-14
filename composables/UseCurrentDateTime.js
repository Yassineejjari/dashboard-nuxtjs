export function useCurrentDateTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hour = ref();
    const minute = ref();
    const second = ref();
    const today = ref();
    const updateCurrentDateTime = () => {
        
     hour.value = new Date().getHours().toString().padStart(2, "0");
     minute.value = new Date().getMinutes().toString().padStart(2, "0");
     second.value = new Date().getSeconds().toString().padStart(2, "0");
     today.value = new Date().toLocaleDateString("fr-FR", options);
    };


    const updateCurrentDateTimeInterval = setInterval (updateCurrentDateTime, 1000) ; 


    onMounted(() => {
       updateCurrentDateTime();
    });

    onBeforeUnmount(() => {
        clearInterval(updateCurrentDateTimeInterval);
    });



    return { hour, minute, second, today 
    };

}