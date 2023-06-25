/*
 * @author : @MJ
 * Date    : 6/25/2023
 * Time    : 5:03 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */
export class Item {
    constructor(item_code,item_name,item_unit_price,item_quantity) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_unit_price = item_unit_price;
        this._item_quantity = item_quantity;
    }
    get item_code() {
        return this._item_code;
    }

    set item_code(value) {
        this._item_code = value;
    }

    get item_name() {
        return this._item_name;
    }

    set item_name(value) {
        this._item_name = value;
    }

    get item_unit_price() {
        return this._item_unit_price;
    }

    set item_unit_price(value) {
        this._item_unit_price = value;
    }

    get item_quantity() {
        return this._item_quantity;
    }

    set item_quantity(value) {
        this._item_quantity = value;
    }

}