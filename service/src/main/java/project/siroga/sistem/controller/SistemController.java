package project.siroga.sistem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.siroga.sistem.model.Sistem;
import project.siroga.utils.Message;

@RestController
@RequestMapping("/siroga/api/sistem")
@CrossOrigin(origins = {"*"})
public class SistemController {
    @Autowired
    SistemService sistemService;

    @GetMapping("/")
    public ResponseEntity<Message> getAll(){
        return sistemService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable("id") long id){
        return sistemService.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity<Message> saveSistem(@RequestBody SistemDTO sistemDTO){
        return sistemService.save(new Sistem(
                sistemDTO.getBroker(),
                sistemDTO.getHumEarthMin(),
                sistemDTO.getHumEarthMax(),
                sistemDTO.getHumAirMin(),
                sistemDTO.getHumAirMax(),
                sistemDTO.getTempEarthMin(),
                sistemDTO.getTempEarthMax(),
                sistemDTO.getTempAirMin(),
                sistemDTO.getTempAirMax(),
                sistemDTO.getUser(),
                sistemDTO.getStatus(),
                null,
                null
        ));
    }

    @PutMapping("/")
    public ResponseEntity<Message> updateSistem(@RequestBody SistemDTO sistemDTO){
        return sistemService.update(new Sistem(
                sistemDTO.getId(),
                sistemDTO.getBroker(),
                sistemDTO.getHumEarthMin(),
                sistemDTO.getHumEarthMax(),
                sistemDTO.getHumAirMin(),
                sistemDTO.getHumAirMax(),
                sistemDTO.getTempEarthMin(),
                sistemDTO.getTempEarthMax(),
                sistemDTO.getTempAirMin(),
                sistemDTO.getTempAirMax(),
                sistemDTO.getUser(),
                sistemDTO.getStatus(),
                null,
                null
        ));
    }
}
