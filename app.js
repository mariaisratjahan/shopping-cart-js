function updateProductNumber(product,price,isIncreasing){
    const productInput=document.getElementById(product+'-number');
    let productValue=parseInt(productInput.value) ;
    if(isIncreasing){
        productInput.value=productValue+1;
        productValue= productInput.value;

    }
    else if(productValue > 0){
        productInput.value=productValue-1;
        productValue= productInput.value;

    }
    const totalProductPrice=document.getElementById(product+'-total');
    totalProductPrice.innerText=price*productValue;
    subtotal();
   

}

function getInputValue(product){
    const getElement=document.getElementById(product+'-number');
    const getValue=parseInt(getElement.value);
    return getValue;

}
//subtotal and total tax 
function subtotal(){  
    const getPhoneTotal=getInputValue('phone')*1219;
    const getCaseTotal=getInputValue('case')*59;
    const subtotalIs=getPhoneTotal+getCaseTotal;
    const tax=subtotalIs/10;
    //getting subtotal
    document.getElementById('Subtotal').innerText=subtotalIs;
    //getting total tax
    document.getElementById('tax-total').innerText=tax;
    //total price
    document.getElementById('total-price').innerText=subtotalIs+tax;
}


//handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true);
   
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219,false);
});

//handle case increse decrase events
document.getElementById('btn-plus').addEventListener('click', function(){
    updateProductNumber('case',59,true);
});
document.getElementById('btn-minus').addEventListener('click', function(){
    updateProductNumber('case',59,false);
    
})