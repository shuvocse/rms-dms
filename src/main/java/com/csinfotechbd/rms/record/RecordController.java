package com.csinfotechbd.rms.record;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/rms/record")
public class RecordController {

    @Autowired
    private RecordService recordService;

    @GetMapping(value = "/home")
    public String index(){
        return "rms/record/index";
    }

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RecordEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(recordService.getAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/add")
    public String createView(){
        return "rms/record/createView";
    }

    @GetMapping(value = "/advanceSearch")
    public String advanceSearch(){
        return "rms/record/advanceSearch";
    }
}
