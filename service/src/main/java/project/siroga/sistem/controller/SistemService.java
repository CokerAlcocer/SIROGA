package project.siroga.sistem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.siroga.sistem.model.Sistem;
import project.siroga.sistem.model.SistemRepository;
import project.siroga.utils.Message;

import java.sql.SQLException;
import java.util.Optional;

@Service
@Transactional
public class SistemService {
    @Autowired
    SistemRepository sistemRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findAll(){
        return new ResponseEntity<>(new Message("OK", false, sistemRepository.findAll()),
                HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Messsage> findByUseId(long id){

    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findById(long id){
        if (sistemRepository.existsById(id)) {
            return new ResponseEntity<>(new Message("Encontrado", false, sistemRepository.findById(id)),
                    HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("No encontrado", true, null),HttpStatus.BAD_REQUEST);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findByBrokerLink(String brokerLink){
        if (sistemRepository.existsByBroker(brokerLink)) {
            return new ResponseEntity<>(new Message("OK", false, sistemRepository.findByBroker(brokerLink)),
                    HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> save(Sistem sistem){
        Optional<Sistem> existingSistem = sistemRepository.findByBroker(sistem.getBroker());
        if (existingSistem.isPresent()){
            return new ResponseEntity<>(new Message("El sistema ya existe",true, null), HttpStatus.BAD_REQUEST);
        }
        Sistem savedSistem = sistemRepository.saveAndFlush(sistem);
        return new ResponseEntity<>(new Message("Sistema registrado", false, savedSistem), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> update(Sistem sistem){
        if (sistemRepository.existsByBroker(sistem.getBroker()) || sistemRepository.existsById(sistem.getId())) {
            return new ResponseEntity<>(new Message("Sistema actualizado", false, sistemRepository.saveAndFlush(sistem)),
                    HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("Sistema no encontrado", true, null), HttpStatus.BAD_REQUEST);
    }


}
