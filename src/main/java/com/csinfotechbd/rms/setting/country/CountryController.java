package com.csinfotechbd.rms.setting.country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/rms/setting/country")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CountryEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(countryService.getAllCountry(), HttpStatus.OK);
    }


}
