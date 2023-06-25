/*
 * @author : @MJ
 * Date    : 6/25/2023
 * Time    : 9:32 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */

import {Item} from "../model/Item.js"

const itemData = "ITEM";
var itemDataArray = [];

document.getElementById("addItem").addEventListener("click",function () {
    let oldData = localStorage.getItem(itemData);

    if(oldData){
        itemDataArray = JSON.parse(oldData);
    }
    itemDataArray.push(new Item(
        $("#inputItemId").val(),
        $("#inputItemName").val(),
        $("#inputItemUnitPrice").val(),
        $("#inputItemQuantity").val(),
    ));

    localStorage.setItem(itemData,JSON.stringify(itemDataArray));

    loadTable();

});

function loadTable(){
    let itemArray = JSON.parse(localStorage.getItem(itemData));
    $('#item_table').empty();

    itemArray.map((result) =>{
        console.log(result);
        $('#item_table').append(`
        <tr>
                    <th scope="row">${result._item_code}</th>
                    <td>${result._item_name}</td>
                    <td>${result._item_unit_price}</td>
                    <td>${result._item_quantity}</td>

                </tr>\`
        `)
    })
}

document.getElementById("updateItem").addEventListener("click",function () {
    itemDataArray = JSON.parse(localStorage.getItem(itemData));
    let item={
        _item_code:$('#inputItemId').val(),
        _item_name:$('#inputItemName').val(),
        _item_unit_price:$('#inputItemUnitPrice').val(),
        _item_quantity:$('#inputItemQuantity').val()
    }
    console.log(item._item_code);
    let index=CReId(itemDataArray,item._item_code);
    console.log(index);
    if (index!==-1){
        itemDataArray[index]._item_name=$('#inputItemName').val(),
            itemDataArray[index]._item_unit_price=$('#inputItemUnitPrice').val(),
            itemDataArray[index]._item_quantity=$('#inputItemQuantity').val()
        itemDataArray.splice(index,1,item)
    }
    localStorage.setItem(itemData,JSON.stringify(itemDataArray));
    loadTable();

});

function CReId(arr,id){
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]._item_code);
        if (arr[i]._item_code===id) {
            return i;
        }
    }
    return -1;

}

document.getElementById("deleteItem").addEventListener("click",function () {


});
