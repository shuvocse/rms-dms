package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.users.User;
import com.csinfotechbd.users.UserDao;
import com.csinfotechbd.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseServiceImpl implements WarehouseService{

	@Autowired
	private WarehouseDao warehouseDao;


	@Override
	public List<WarehouseEntity> getAll() {
		return warehouseDao.getAll();
	}

	@Override
	public WarehouseEntity findById(long id) {
		return warehouseDao.findById(id);
	}

	@Override
	public <T> T getUniqueResult(T id) {
		return null;
	}

	@Override
	public <T> boolean save(T object) {
		return warehouseDao.save(WarehouseEntity.class.getName(), object);
	}

	@Override
	public <T> boolean update(T object) {
		return false;
	}

	@Override
	public <T> boolean delete(T id) {
		return false;
	}
}
