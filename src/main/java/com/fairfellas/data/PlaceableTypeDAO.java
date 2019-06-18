package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Event;
import com.fairfellas.beans.PlaceableType;

public interface PlaceableTypeDAO {
	public int addPlaceableType(PlaceableType newPlaceableType);
	public PlaceableType getPlaceableTypeById(int id);
	public List<PlaceableType> getPlaceableTypes();
	public void removePlaceableType(PlaceableType placeableType);
}
