package xinbo.website.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import xinbo.website.model.loginInfo;
import xinbo.website.repository.RegistrationRepository;

@RestController
public class RegistrationResource {

    @Autowired
    RegistrationRepository loginInfoRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/userInfo")
    public List<loginInfo> getAllUsers() {
        return new ArrayList<>(loginInfoRepository.findAll());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/userInfo")
    public loginInfo addUser(@RequestBody loginInfo info) {
        loginInfoRepository.save(info);
        return info;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/userInfo/{id}")
    public void deleteUser(@PathVariable long id) {
        loginInfoRepository.deleteById(id);
    }
}
