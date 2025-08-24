package project2d.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project2d.Bus;
import project2d.User;
import project2d.dto.BookingRequest;
import project2d.service.BusService;

@RestController
@RequestMapping("/bus")
public class BusController {
	private final BusService busService;
	
	public BusController(BusService busService) {
		this.busService = busService;
	}
	
	@GetMapping("/details")
	public ResponseEntity<Bus> getBusDetails() {
		return ResponseEntity.ok(busService.getBusDetails());
	}
	
	@GetMapping("/seats")
	public ResponseEntity<User[][]> getSeats() {
		return ResponseEntity.ok(busService.getSeats());
	}
	
	@PostMapping("/book")
	public ResponseEntity<?> bookSeat(@RequestBody BookingRequest request) {
		String result = busService.bookSeat(
			request.getName(),
			request.getAge(),
			request.getGen(),
			request.getPhno(),
			request.getBoarding(),
			request.getDest(),
			request.getEmail(),
			request.getRow(),
			request.getSeat()
		);
		return ResponseEntity.ok(new MessageResponse(result));
	}
	
	static class MessageResponse {
		public final String message;
		MessageResponse(String message) { this.message = message; }
		public String getMessage() { return message; }
	}
}