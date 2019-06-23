package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Map;

public interface MapDAO {
	public int addMap(Map newMap);
	public List<Map> getMapsByMapId(int id);
	public List<Map> getMaps();
	public void removeMap(int id);
}
