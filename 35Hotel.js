//3.5 Hotel

//CÓDIGO ORIGINAL ANTES DA REFATORAÇÃO

class HotelReservation {
    bookRoom(roomType, days, isVip) {
        let price = 0;
        if (roomType === "Single") {
            price = 100;
        } else if (roomType === "Double") {
            price = 200;
        } else if (roomType === "Suite") {
            price = 300;
        } else {
            return "Tipo de quarto inválido.";
        }
        if (isVip) {
            price *= 0.9;
        }
        return "Reserva efetuada: " + roomType + " por " + days + " dias. Preço: " + (price * days);
    }
}

const reservation = new HotelReservation();
console.log(reservation.bookRoom("Single", 3, true));
