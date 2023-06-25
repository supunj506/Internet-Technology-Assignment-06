/*
 * @author : @MJ
 * Date    : 6/23/2023
 * Time    : 8:32 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */


export class Customer {
    constructor(cus_id,cus_name,cus_address,cus_email) {

        this._cus_id = cus_id;
        this._cus_name = cus_name;
        this._cus_address = cus_address;
        this._cus_email = cus_email;
    }
    get cus_id() {
        return this._cus_id;
    }

    set cus_id(value) {
        this._cus_id = value;
    }

    get cus_name() {
        return this._cus_name;
    }

    set cus_name(value) {
        this._cus_name = value;
    }

    get cus_address() {
        return this._cus_address;
    }

    set cus_address(value) {
        this._cus_address = value;
    }

    get cus_email() {
        return this._cus_email;
    }

    set cus_email(value) {
        this._cus_email = value;
    }

}
