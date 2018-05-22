package com.csinfotechbd.rms.setting.shelfsBox;

import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnEntity;
import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnService;
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
@RequestMapping("/rms/setting/shelf-box")
public class ShelfsBoxController {

    @Autowired
    private ShelfBoxService shelfBoxService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ShelfBoxEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(shelfBoxService.getAll(), HttpStatus.OK);
    }
}
