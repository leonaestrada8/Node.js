//3.5 Hotel

//CÓDIGO REFATORADO

class HotelReservation2 {
    static SINGLE_ROOM_PRICE = 100;
    static DOUBLE_ROOM_PRICE = 200;
    static SUITE_ROOM_PRICE = 300;
    static VIP_DISCOUNT = 0.9;

    bookRoom(roomType, days, isVip) {
        let price = this.calculatePrice(roomType, isVip);
        if (price <= 0) {
            return "Tipo de quarto inválido.";
        }
        return `Reserva efetuada: ${roomType} por ${days} dias. Preço: ${price * days}`;
    }

    calculatePrice(roomType, isVip) {
        let price = 0;
        switch (roomType) {
            case "Single":
                price = HotelReservation2.SINGLE_ROOM_PRICE;
                break;
            case "Double":
                price = HotelReservation2.DOUBLE_ROOM_PRICE;
                break;
            case "Suite":
                price = HotelReservation2.SUITE_ROOM_PRICE;
                break;
        }
        if (isVip) {
            price *= HotelReservation2.VIP_DISCOUNT;
        }
        return price;
    }
}

const reservation = new HotelReservation2();
console.log(reservation.bookRoom("Single", 3, true));

