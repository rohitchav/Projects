package project2d.service;

import org.springframework.stereotype.Service;

import project2d.Bus;
import project2d.User;

@Service
public class BusService {
	private final Bus bus;
	
	public BusService() {
		this.bus = new Bus(
			"Lal Pari",
			"MH 11 CC 6258",
			"Phaltan",
			"Pune",
			"Non-AC",
			"Seater",
			"7.00 PM",
			"12.00 AM",
			110,
			new String[] {"Phaltan","Suravadi","Vadjal","Lonand"},
			new String[] {"Jejuri","Saswad","Hadapsar","Swargate"}
		);
	}
	
	public Bus getBusDetails() {
		return bus;
	}
	
	public User[][] getSeats() {
		return bus.getSeats();
	}
	
	public synchronized String bookSeat(String name, int age, char gen, long phno, String boarding, String dest, String email, char row, int seat) {
		int rowIndex = row - 65;
		if (!(row >= 'A' && row <= 'J') || !(seat > 0 && seat <= 4)) {
			return "Invalid row or seat number.";
		}
		User[][] seats = bus.getSeats();
		if (seats[rowIndex][seat-1] != null) {
			return "Seat is already booked. Please choose another seat.";
		}
		if (!bus.checkStartPoints(boarding) || !bus.checkEndPoints(dest)) {
			return "Invalid boarding or destination point.";
		}
		bus.bookSeat(name, age, gen, phno, boarding, dest, email, row, seat);
		return "Ticket Booked..!";
	}
}