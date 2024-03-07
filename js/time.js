




setInterval(() => {
var currentdate = new Date(); 
            var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                document.getElementById("time").innerHTML=`${datetime}`;
                console.log(datetime)
        if (currentdate.getHours()==23&&
           currentdate.getMinutes()==6&&
            currentdate.getSeconds()==10) {
            window.location.replace("https://content-manager-sdk.github.io/Community/233/");
        }
}, 1000);


// redirect page


            setInterval(function() {
                var div = document.querySelector("#counter");
                var count = div.textContent * 1 - 1;
                div.textContent = count;
                div.textContent=100000
                if (count <= 0) {
                    window.location.replace("https://content-manager-sdk.github.io/Community/233/");
                }
            }, 1000);
     