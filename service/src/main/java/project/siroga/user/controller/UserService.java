package project.siroga.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.siroga.user.model.User;
import project.siroga.user.model.UserRepository;
import project.siroga.utils.Message;

import java.sql.SQLException;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findAll(){
        return new ResponseEntity<>(new Message("OK", false, userRepository.findAll()), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findById(long id){
        if(userRepository.existsById(id)){
            return new ResponseEntity<>(new Message("Encontrado", false, userRepository.findById(id)), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> save(User user){
        Optional<User> exisitingUser = userRepository.findByUsername(user.getUsername());
        if(exisitingUser.isPresent()){
            return new ResponseEntity<>(new Message("El usuario ya existe", true, null), HttpStatus.BAD_REQUEST);
        }else{
            User savedUser = userRepository.saveAndFlush(user);
            return new ResponseEntity<>(new Message("Registrado", false, savedUser), HttpStatus.OK);
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> update(User user){
        if(userRepository.existsById(user.getId())){
            return new ResponseEntity<>(new Message("Actualizado", false, userRepository.saveAndFlush(user)), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
        }
    }
}
