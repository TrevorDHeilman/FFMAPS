package com.fairfellas.data;

import java.util.List;
import com.fairfellas.beans.Placeable;

public interface PlaceableDAO {

	public int addPlaceable(Placeable newPlaceable);
	public void removePlaceable(Placeable placeable);
	public Placeable getPlaceableById(int id);
	public List<Placeable> getPlaceableByType(String type);
	public List<Placeable> getPlaceables();
}
