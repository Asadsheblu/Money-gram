document.getElementById('calculate').addEventListener('click',function(){
   getTotals('balance')
})
function getInputId(id){
    const inputId=   document.getElementById(id)
       return inputId
 }


 
function getTotals(id){
        
    const income=getInputId('income').value ;
    /* expense value add */
        const food=getInputId('food').value ;
        const rent=getInputId('rent').value ;
        const clothes=getInputId('clothes').value ;
        const expense=parseFloat(food)+parseFloat(rent)+parseFloat(clothes)
        const totalExpense=getInputId('total-expense')
        totalExpense.innerText=expense
       let balance=getInputId(id)
       return  balance.innerText= parseInt (income)- parseInt (totalExpense.innerText)
    }
   

//save
document.getElementById('save').addEventListener('click',function(){
  
   let getTotalExpense= getTotals('balance')
   
 
  const saveValue=getInputId('save-value').value
   const  totaSaveValue=  parseFloat (saveValue)/100
  const saveMoney=( parseFloat (getTotalExpense) * totaSaveValue)
    const savingAmount=getInputId('saving-amount')
    savingAmount.innerText=saveMoney

        const remainingBalance=getInputId('remaining-balance')
        remainingBalance.innerText=balance.innerText-savingAmount.innerText
})


 