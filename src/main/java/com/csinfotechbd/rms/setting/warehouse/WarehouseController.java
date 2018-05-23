package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import com.csinfotechbd.rms.setting.zone.ZoneService;
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
@RequestMapping("/rms/setting/warehouse")
public class WarehouseController {

    @Autowired
    private WarehouseService warehouseService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WarehouseEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(warehouseService.getAll(), HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value="/save",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WarehouseEntity auditSave(@RequestBody WarehouseEntity warehouseEntity, BindingResult result, Principal principal, HttpSession session){
        WarehouseEntity object = new WarehouseEntity();
        object.setTitle("Titas Gusyh");
        object.setZoneEntity(new ZoneEntity(1));
        warehouseService.save(object);
        return object;
    }

    @ResponseBody
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WarehouseEntity> findById(@PathVariable(name = "id") long id, Principal principal, HttpSession session) {
        return new ResponseEntity<>(warehouseService.findById(id), HttpStatus.OK);
    }
}
