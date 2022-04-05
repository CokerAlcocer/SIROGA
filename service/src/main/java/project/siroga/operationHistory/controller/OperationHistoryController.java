package project.siroga.operationHistory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.siroga.operationHistory.model.OperationHistory;
import project.siroga.utils.Message;

@RestController
@RequestMapping("/siroga/api/oh")
@CrossOrigin(origins = {"*"})
public class OperationHistoryController {
    @Autowired
    private OperationHistoryService operationHistoryService;

    @GetMapping("/")
    private ResponseEntity<Message> getAll(){
        return operationHistoryService.findAll();
    }

    @GetMapping("/{id}")
    private ResponseEntity<Message> getById(@PathVariable("id") long id){
        return operationHistoryService.findById(id);
    }

    @PostMapping("/")
    private ResponseEntity<Message> saveOH(@RequestBody OperationHistoryDTO operationHistoryDTO){
        return operationHistoryService.save(new OperationHistory(
                operationHistoryDTO.getSistem(),
                operationHistoryDTO.getOperation()
        ));
    }

}
