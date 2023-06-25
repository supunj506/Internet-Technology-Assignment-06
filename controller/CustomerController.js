/*
 * @author : @MJ
 * Date    : 6/25/2023
 * Time    : 5:08 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */

import {Customer} from "../model/Customer.js";

const customerData = "CUSTOMER";
var CustomerDataArray = [];

document.getElementById("addCus").addEventListener("click",function () {
    let oldData = localStorage.getItem(customerData);

    if(oldData){
        CustomerDataArray = JSON.parse(oldData);
    }
    CustomerDataArray.push(new Customer(
        $("#inputCusId").val(),
        $("#inputCusName").val(),
        $("#inputCusAddress").val(),
        $("#inputCusEmail").val(),
    ));

    localStorage.setItem(customerData,JSON.stringify(CustomerDataArray));
    loadTable();

});

function loadTable(){
    let customerArray = JSON.parse(localStorage.getItem(customerData));
    $('#customer_table').empty();

    customerArray.map((result) =>{
        console.log(result);
        $('#customer_table').append(`
        <tr>
                    <th scope="row">${result._cus_id}</th>
                    <td>${result._cus_name}</td>
                    <td>${result._cus_address}</td>
                    <td>${result._cus_email}</td>

                </tr>\`
        `)
    })
}

document.getElementById("updateCus").addEventListener("click",function () {
    CustomerDataArray = JSON.parse(localStorage.getItem(customerData));
    let customer={
        _cus_id:$('#inputCusId').val(),
        _cus_name:$('#inputCusName').val(),
        _cus_address:$('#inputCusAddress').val(),
        _cus_email:$('#inputCusEmail').val()
    }
    console.log(customer._cus_id);
    let index=CReId(CustomerDataArray,customer._cus_id);
    console.log(index);
    if (index!==-1){
        CustomerDataArray[index]._cus_name=$('#inputCusName').val(),
            CustomerDataArray[index]._cus_address=$('#inputCusAddress').val(),
            CustomerDataArray[index]._cus_email=$('#inputCusEmail').val()
        CustomerDataArray.splice(index,1,customer)
    }
    localStorage.setItem(customerData,JSON.stringify(CustomerDataArray));
    loadTable();

});

function CReId(arr,id){
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]._cus_id);
        if (arr[i]._cus_id===id) {
            return i;
        }
    }
    return -1;

}

document.getElementById("deleteCus").addEventListener("click",function () {


});






