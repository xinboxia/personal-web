package xinbo.website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import xinbo.website.repository.UserRepository;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

}
