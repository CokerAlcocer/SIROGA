package project.siroga.measureHistory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.siroga.measureHistory.model.MeasureHistory;
import project.siroga.utils.Message;

@RestController
@RequestMapping("/siroga/api/mh")
@CrossOrigin(origins = {"*"})
public class MeasureHistoryController {
    @Autowired
    MeasureHistoryService measureHistoryService;

    @GetMapping("/")
    public ResponseEntity<Message> getAll(){
        return measureHistoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable("id") long id){
        return measureHistoryService.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity<Message> saveMH(@RequestBody MeasureHistoryDTO measureHistoryDTO){
        return measureHistoryService.save(new MeasureHistory(
                measureHistoryDTO.getSistem(),
                measureHistoryDTO.getBrokerLink()
        ));
    }
}
