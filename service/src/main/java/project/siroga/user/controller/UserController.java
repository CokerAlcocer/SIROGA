package project.siroga.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.siroga.user.model.User;
import project.siroga.utils.Message;

@RestController
@RequestMapping("/siroga/api/user")
@CrossOrigin(origins = {"*"})
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/")
    public ResponseEntity<Message> getAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable("id") long id) {
        return userService.findById(id);
    }

    @PostMapping("/u")
    public ResponseEntity<Message> getByMailAndPassword(@RequestBody UserDTO userDTO) {
        return userService.findByEmailAndPassword(new User(
                userDTO.getEmail(),
                userDTO.getPassword()
        ));
    }

    @PostMapping("/e")
    public ResponseEntity<Message> getByEmail(@RequestBody UserDTO userDTO){
        return userService.findByEmail(new User(
                userDTO.getEmail()
        ));
    }

    @PostMapping("/")
    public ResponseEntity<Message> saveUser(@RequestBody UserDTO userDTO){
        return userService.save(new User(
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword(),
                userDTO.getName(),
                userDTO.getSurname(),
                userDTO.getLastname(),
                null
        ));
    }

    @PutMapping("/")
    public ResponseEntity<Message> updateUser(@RequestBody UserDTO userDTO){
        return userService.update(new User(
                userDTO.getId(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword(),
                userDTO.getName(),
                userDTO.getSurname(),
                userDTO.getLastname(),
                null
        ));
    }
}
