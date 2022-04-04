package project.siroga.operationHistory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.siroga.operationHistory.model.OperationHistory;
import project.siroga.operationHistory.model.OperationHistoryRepository;
import project.siroga.utils.Message;

import java.sql.SQLException;

@Service
@Transactional
public class OperationHistoryService {
    @Autowired
    OperationHistoryRepository operationHistoryRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findAll(){
        return new ResponseEntity<>(new Message("OK", false, operationHistoryRepository.findAll()), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<Message> findById(long id){
        if(operationHistoryRepository.existsByOperation_id(id)){
            return new ResponseEntity<>(new Message("Encontrado", false, operationHistoryRepository.findByOperation_id(id)), HttpStatus.OK);
        }else if(operationHistoryRepository.existsBySistem_id(id)){
            return new ResponseEntity<>(new Message("Encontrado", false, operationHistoryRepository.findBySistem_id(id)), HttpStatus.OK);
        }

        return new ResponseEntity<>(new Message("No encontrado", true, null), HttpStatus.BAD_REQUEST);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<Message> save(OperationHistory operationHistory){
        OperationHistory saved = operationHistoryRepository.saveAndFlush(operationHistory);
        return new ResponseEntity<>(new Message("Guardado", false, saved), HttpStatus.OK);
    }
}
