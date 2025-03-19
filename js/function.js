document.getElementById('donate-btn').addEventListener('click',function(event)
{ 

  const donation= getInputAmount('first-value');

  if (!/^\d+(\.\d+)?$/.test(donation) || parseFloat(donation) <= 0) {
    alert("Please enter a valid positive number!");
    
} 
else {
    

  //console.log(donation);
  const Balance = parseFloat(document.getElementById('balance').innerText);
   console.log( Balance)
  
  
   totalBalance = donation+Balance ;
  //console.log(totalBalance)

 const MainBalance = parseFloat(document.getElementById('main-tk').innerText);
 //console.log(MainBalance);

 const remaingBanlance = MainBalance-donation;
 //console.log(remaingBanlance);
 document.getElementById('balance').innerText = totalBalance;
 document.getElementById('main-tk').innerText = remaingBanlance;

 clearInput('first-value');
 openModal();

 const now = new Date();
 const formattedDate = now.toLocaleString()
 
 const div = document.createElement('div');
 div.classList.add('bg-red-200')
 div.innerHTML = `
 <h4 class ="text-2xl font-bold">Donate for Flood at Feni, Bangladesh</h4>
 <p>${donation} is donated  </p>
 
   <p>${now} and ${formattedDate}</p>
 `
 document.getElementById('history-list').appendChild(div);
    
 
}

  
})



document.getElementById('donate-btn2').addEventListener('click',function(event)
{ 

  const donation= getInputAmount('second-value');
  //console.log(donation);

  if (!/^\d+(\.\d+)?$/.test(donation) || parseFloat(donation) <= 0) {
    alert("Please enter a valid positive number!");
    
} 
else{
  const Balance = parseFloat(document.getElementById('balance2').innerText);
   console.log( Balance)
  
  
   totalBalance = donation+Balance ;
  //console.log(totalBalance)

 const MainBalance = parseFloat(document.getElementById('main-tk').innerText);
 //console.log(MainBalance);

 const remaingBanlance = MainBalance-donation;
 //console.log(remaingBanlance);
 document.getElementById('balance2').innerText = totalBalance;
 document.getElementById('main-tk').innerText = remaingBanlance;

 clearInput('second-value');
 openModal();

 
 const now = new Date();
 const formattedDate = now.toLocaleString()
 
 const div = document.createElement('div');
 div.classList.add('bg-red-200')
 div.innerHTML = `
 <h4 class ="text-2xl font-bold">Donate for Flood at Feni, Bangladesh</h4>
 <p>${donation} is donated  </p>
 
   <p>${now} and ${formattedDate}</p>
 `
 document.getElementById('history-list').appendChild(div);
 
    
 
}

   
})


document.getElementById('donate-btn3').addEventListener('click',function(event)
{ 

  const donation= getInputAmount('third-value');
  //console.log(donation);
  if (!/^\d+(\.\d+)?$/.test(donation) || parseFloat(donation) <= 0) {
    alert("Please enter a valid positive number!");
    
} 
  const Balance = parseFloat(document.getElementById('balance3').innerText);
   console.log( Balance)
  
  
   totalBalance = donation+Balance ;
  //console.log(totalBalance)

 const MainBalance = parseFloat(document.getElementById('main-tk').innerText);
 //console.log(MainBalance);

 const remaingBanlance = MainBalance-donation;
 //console.log(remaingBanlance);
 document.getElementById('balance3').innerText = totalBalance;
 document.getElementById('main-tk').innerText = remaingBanlance;

 clearInput('third-value');
 openModal();
 const now = new Date();
 const formattedDate = now.toLocaleString()
 
 const div = document.createElement('div');
 div.classList.add('bg-red-200')
 div.innerHTML = `
 <h4 class ="text-2xl font-bold">Donate for Flood at Feni, Bangladesh</h4>
 <p>${donation} is donated  </p>
 
   <p>${now} and ${formattedDate}</p>
 `
 document.getElementById('history-list').appendChild(div);
    
 
 
   
})

    const donationBtn = document.getElementById('donation-button');
    const historyBtn = document.getElementById('history-button');
    

    historyBtn.addEventListener('click',function (){
        historyBtn.classList.add(
            "bg-lime-400",
            "font-bold",
        );
        donationBtn.classList.remove
        (
                "bg-lime-400",
                "font-bold",

        );
        document.getElementById("history-about").style.display = "block";

        document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-about").classList.remove("hidden");
        
    });

    
    
    donationBtn.addEventListener('click',function (){
        const donationBtn = document.getElementById('donation-button');
        const historyBtn = document.getElementById('history-button');
    donationBtn.classList.add(
            "bg-lime-400",
            "font-bold",
        );
        historyBtn.classList.remove
        (
                "bg-lime-400",
                "font-bold",

        );
         document.getElementById("history-about").classList.add("hidden")

        document.getElementById("donation-section").classList.remove("hidden");
       
    });




   