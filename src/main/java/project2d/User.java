package project2d;

public class User {
    String name;
    int age;
    char gen;
    long phno;
    String boarding;
    String dest;
    String email;
    
    public User() {
		
	} 

	public User(String name, int age, char gen, long phno, String boarding, String dest, String email) {
		this.name = name;
		this.age = age;
		this.gen = gen;
		this.phno = phno;
		this.boarding = boarding;
		this.dest = dest;
		this.email = email;
	}
	
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
	
	public void displayUser()
	{
		System.out.println("Name: "+name);
		System.out.println("Age: "+age);
		System.out.println("Gender: "+gen);
		System.out.println("Phone Number: "+phno);
		System.out.println("Boarding: "+boarding);
		System.out.println("Destination: "+dest);
		System.out.println("Email :"+email);
		
		System.out.println("====================================");
	}
	
	public String toString()
	{
		return name+","+gen;
	}
}