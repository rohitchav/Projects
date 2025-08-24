package project2d;

import java.util.Arrays;

public class Bus {
     String name;
     String number;
     String start;
     String end;
     String type;
     String seatType;
     String startTime;
     String endTime;
     int dist;
     String[] boarding;
     String[] drop;
     
    User[][] seats = new User[10][4];
    int seatAvailability = 40;
	public Bus() {
		
	}

	public Bus(String name, String number, String start, String end, String type, String seatType, String startTime,
			String endTime, int dist, String[] boarding, String[] drop) {
		this.name = name;
		this.number = number;
		this.start = start;
		this.end = end;
		this.type = type;
		this.seatType = seatType;
		this.startTime = startTime;
		this.endTime = endTime;
		this.dist = dist;
		this.boarding = boarding;
		this.drop = drop;
		
		System.out.println("Bus Registered..!");
	} 
	
	public void bookSeat(String name, int age, char gen, long phno, String boarding, String dest, String email, char row, int seat) {
	    if (row >= 'A' && row <= 'J' && seat > 0 && seat <= 4) {
	        if (seats[row-65][seat - 1] == null) {
	            if (checkStartPoints(boarding) && checkEndPoints(dest)) {
	                seats[row-65][seat - 1] = new User(name, age, gen, phno, boarding, dest, email);
	                System.out.println("Ticket Booked..!");
	                seatAvailability--;
	            } else {
	                System.out.println("Invalid boarding or destination point.");
	            }
	        } else {
	            System.out.println("Seat is already booked. Please choose another seat.");
	        }
	    } else {
	        System.out.println("Invalid row or seat number.");
	    }
	}

	public boolean checkEndPoints(String dist)
	{
		for(int i=0;i<this.drop.length;i++)
		{
			if(this.drop[i].equalsIgnoreCase(dist))
			{
				return true;
			}
		}
		return false;
	}
	
	public boolean checkStartPoints(String boarding)
	{
		for(int i=0;i<this.boarding.length;i++)
		{
			System.out.println(this.boarding[i]);
			if(this.boarding[i].equalsIgnoreCase(boarding))
			{
				return true;
			}
		}
		return false;
	}
	
	public void seatAvailability()
	{
		for(int i=0;i<seats.length;i++)
		{
			for (int j = 0; j < seats[0].length; j += 2) {
			    System.out.print("[" + seats[i][j] + "]" + "[" + seats[i][j+1] + "]  ");
			}
           System.out.println();
		}
		
		System.out.println("\nSeat Availability: "+seatAvailability);
	}
	
	public void displayBus()
	{
		System.out.println("==============================");
		System.out.println("----------Bus Details----------");
		System.out.println("Name: "+name);
		System.out.println("Number: "+number);
		System.out.println("Starting Point: "+start);
		System.out.println("Ending Point: "+end);
		System.out.println("Bus Type: "+type);
		System.out.println("Seat Type: "+seatType);
		System.out.println("Start Time: "+startTime);
		System.out.println("End Time: "+endTime);
		System.out.println("Distance: "+dist);
		System.out.println("Boarding Points: "+Arrays.toString(boarding));
		System.out.println("Dropping Points: "+Arrays.toString(drop));
	}

	public String getName() { return name; }
	public String getNumber() { return number; }
	public String getStart() { return start; }
	public String getEnd() { return end; }
	public String getType() { return type; }
	public String getSeatType() { return seatType; }
	public String getStartTime() { return startTime; }
	public String getEndTime() { return endTime; }
	public int getDist() { return dist; }
	public String[] getBoarding() { return boarding; }
	public String[] getDrop() { return drop; }
	public User[][] getSeats() { return seats; }
	public int getSeatAvailability() { return seatAvailability; }
 }