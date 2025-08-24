package project2d.dto;

public class BookingRequest {
	private String name;
	private int age;
	private char gen;
	private long phno;
	private String boarding;
	private String dest;
	private String email;
	private char row;
	private int seat;

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
	public int getAge() { return age; }
	public void setAge(int age) { this.age = age; }
	public char getGen() { return gen; }
	public void setGen(char gen) { this.gen = gen; }
	public long getPhno() { return phno; }
	public void setPhno(long phno) { this.phno = phno; }
	public String getBoarding() { return boarding; }
	public void setBoarding(String boarding) { this.boarding = boarding; }
	public String getDest() { return dest; }
	public void setDest(String dest) { this.dest = dest; }
	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }
	public char getRow() { return row; }
	public void setRow(char row) { this.row = row; }
	public int getSeat() { return seat; }
	public void setSeat(int seat) { this.seat = seat; }
}