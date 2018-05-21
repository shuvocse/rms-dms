package com.csinfotechbd.rms.setting.zone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/rms/setting/zone")
public class ZoneController {

    @Autowired
    private ZoneService zoneService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ZoneEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(zoneService.getAll(), HttpStatus.OK);
    }
}
