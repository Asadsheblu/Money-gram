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
          //error handeling for NaN
          if( (food=="" || food<0) || (income==""||income<0) ||(rent==""||rent<0)||(clothes==""||clothes<0)){
            return alert('please fill up this value and use postive number')
         }


            if(income<expense){
              return alert('Expenditure has increased due to income. Please reduce expenses') 
             
            }
           else{ 
                    totalExpense.innerText=expense
                    let balance=getInputId(id)
                    balance.innerText= parseInt (income)- parseInt (totalExpense.innerText)
            }  
          
    }
    
//save money function
document.getElementById('save').addEventListener('click',function(){
  
  const income=getInputId('income').value 
 let totalBalance=document.getElementById('balance').innerText

  const saveValue=getInputId('save-value').value
  
    
  if(saveValue>=100 ||saveValue<0  || saveValue=='' ){
    alert('please provide positive number greater than 0 less than 100')

  }
    
  else{
        
        const  totaSaveValue=  parseFloat (saveValue)/100
    const saveMoney=( parseFloat (income) * totaSaveValue)
      const savingAmount=getInputId('saving-amount')
      
     
      const remainingBalance=getInputId('remaining-balance')
     if(totalBalance<saveMoney){
      return  alert('Saving money out of your total balance. Please reduce saving money.')
      
     }
      else{
        savingAmount.innerText=saveMoney;
        remainingBalance.innerText= (balance.innerText-savingAmount.innerText)
     
      }   

      
      
  }
  
  



})


    



   
 