//calculate button click handeler add
document.getElementById('calculate').addEventListener('click',function(){
   getTotals('balance')
  
  
})
//function for common id
function getInputId(id){
    const inputId=   document.getElementById(id) 
      return inputId  
  }
      
//id add and set value using function
function getTotals(id){
        
    const income=getInputId('income').value ;
    /* expense value add */
        const food=getInputId('food').value ;
        const rent=getInputId('rent').value ;
        const clothes=getInputId('clothes').value ;
   const expense=parseFloat(food)+parseFloat(rent)+parseFloat(clothes)
          const totalExpense=getInputId('total-expense')
            totalExpense.innerText=expense 
            if(income>expense){
              let balance=getInputId(id)
               balance.innerText= parseInt (income)- parseInt (totalExpense.innerText)
            }
           else{
              alert('Expenditure has increased due to income. Please reduce expenses')
            }
          
           
          
    }
    
//save money function
document.getElementById('save').addEventListener('click',function(){
  
  const income=getInputId('income').value 
 
  const saveValue=getInputId('save-value').value
  if(saveValue>0 && saveValue<=100 ){
    const  totaSaveValue=  parseFloat (saveValue)/100
    const saveMoney=( parseFloat (income) * totaSaveValue)
      const savingAmount=getInputId('saving-amount')
      
      savingAmount.innerText=saveMoney.toFixed(2);
      
      const remainingBalance=getInputId('remaining-balance')
     
        remainingBalance.innerText= (balance.innerText-savingAmount.innerText).toFixed(2)
      
  }
  else{
        alert('please provide positive number up 0')
  }  

})


    



 