package project.siroga.measureHistory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.siroga.measureHistory.model.MeasureHistory;
import project.siroga.measureHistory.model.MeasureHistoryRepository;
import project.siroga.utils.Message;

import java.sql.SQLException;
import java.util.Optional;

@Service
@Transactional
public class MeasureHistoryService {
    @Autowired
    MeasureHistoryRepository measureHistoryRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findAll(){
        return new ResponseEntity<>(new Message("OK", false, measureHistoryRepository.findAll()), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findById(long id){
        if(measureHistoryRepository.existsById(id)){
            return new ResponseEntity<>(new Message("Encontrado", false, measureHistoryRepository.findById(id)), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> save(MeasureHistory measureHistory){
        Optional<MeasureHistory> existing = measureHistoryRepository.findById(measureHistory.getId());
        if(existing.isPresent()){
            return new ResponseEntity<>(new Message("El registro ya existe", true, null), HttpStatus.BAD_REQUEST);
        }else{
            MeasureHistory saved = measureHistoryRepository.saveAndFlush(measureHistory);
            return new ResponseEntity<>(new Message("Registrado", false, saved), HttpStatus.OK);
        }
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> update(MeasureHistory measureHistory){
        if(measureHistoryRepository.existsById(measureHistory.getId())){
            return new ResponseEntity<>(new Message("Actualizado", false, measureHistoryRepository.saveAndFlush(measureHistory)), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
        }
    }
}
