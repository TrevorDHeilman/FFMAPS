package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Location;

public interface LocationDAO {
	public int addLocation(Location newLocation);
	public Location getLocationById(int id);
	public List<Location> getLocations();
	public void removeLocation(int id);
}
