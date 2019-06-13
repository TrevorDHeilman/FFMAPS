package com.fairfellas.data;

import java.util.Set;
import com.fairfellas.beans.Placeable;

public interface PlaceableDAO {

	public int addPlaceable(Placeable newPlaceable);
	public Placeable getPlaceableById(int id);
	public Set<Placeable> getPlaceableByType(String type);
	public void removePlaceable(Placeable placeable);
}
