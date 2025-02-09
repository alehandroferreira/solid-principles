class BookingValidator {
  validateDates(startDate: Date, endDate: Date) {
    if (startDate >= endDate) {
      throw new Error('Data de check-out deve ser após a data de check-in');
    }
  }
}

class BookingPriceCalculator {
  calculatePrice(dailyRate: number, startDate: Date, endDate: Date): number {
    const durationInDays =
      Math.ceil(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    return dailyRate * durationInDays;
  }
}

class emailService {
  sendConfirmation(email: string) {
    console.log(`Enviado e-mail de confirmação para ${email}`);
  }
}

class BookingService {
  constructor(
    private bookingValidator: BookingValidator,
    private bookingPriceCalculator: BookingPriceCalculator,
    private emailService: emailService,
  ) {}

  processBooking(bookingDetails: any) {
    this.bookingValidator.validateDates(bookingDetails.startDate, bookingDetails.endDate);

    const totalPrice = this.bookingPriceCalculator.calculatePrice(
      bookingDetails.dailyRate,
      bookingDetails.startDate,
      bookingDetails.endDate,
    );

    console.log(`Preço total calculado: ${totalPrice}`);

    this.emailService.sendConfirmation(bookingDetails.email);
  }
}
