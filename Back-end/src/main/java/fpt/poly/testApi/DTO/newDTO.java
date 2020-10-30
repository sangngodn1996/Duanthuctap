package fpt.poly.testApi.DTO;

public class newDTO {
	private String fullName;
	private int age;
	private String country;
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "newDTO [fullName=" + fullName + ", age=" + age + ", country=" + country + "]";
	}
	 
	
}
