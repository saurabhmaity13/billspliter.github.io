function evensplit(){
    let amount = document.getElementById("total_amount").value;
    let members= document.getElementById("members").value;
    let per_person= Number(amount) / members;
    let result='Rs:'+per_person;
    document.getElementById("amt_per_person").value= result;
}



