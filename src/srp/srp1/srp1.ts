class BookingService {
  processBooking(bookingDetails: any) {
    // Validação das datas
    if (bookingDetails.startDate >= bookingDetails.endDate) {
      throw new Error('Data de check-out deve ser após a data de check-in');
    }

    // Cálculo do valor total
    const durationInDays =
      Math.ceil(bookingDetails.enbdDate.getTime() - bookingDetails.startDate.getTime()) /
      (1000 * 60 * 60 * 24);

    const totalPrice = bookingDetails.dailyRate * durationInDays;

    console.log(`Preço tolta caculado: ${totalPrice}`);

    // Envio de confirmação por e-mail
    console.log(`Enviado e-mail de confirmação para ${bookingDetails.email}`);
  }
}
