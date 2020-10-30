package fpt.poly.testApi.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fpt.poly.testApi.DTO.newDTO;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class TakeApi {
	@PostMapping(value = "/new")
	public newDTO createNew(@RequestBody newDTO model) {
		System.out.println(model.toString());
		return model;
	}
	
	@GetMapping(value = "/view")
	public List<newDTO> viewData() {
		List<newDTO> list = new ArrayList<newDTO>();
		newDTO dto = new newDTO();
		dto.setAge(20);
		dto.setFullName("DuyLe");
		dto.setCountry("VietNam");
		
		newDTO dto1= new newDTO();
		dto1.setAge(20);
		dto1.setFullName("Nguyen Thi Linh Hue");
		dto1.setCountry("VietNam");
		
		list.add(dto);
		list.add(dto1);
		System.out.println(list);
		return list;
		
	}
}
